import prisma from '../../adapters/db';
import { comparePassword, createJWT, hashPassword } from '../middlewares/auth'

export const createNewUser = async (req: any, res: any) => {
    //TBD: handel unique input error
    try {
        const user = await prisma.user.create({
            data: {
                username: req.body.username,
                password: await hashPassword(req.body.password),
            },
        });
        
        const token = createJWT(user);
        res.status(201).json({ token });
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: "Something went wrong" });
    };
};

export const signin = async (req: any, res: any) => {
    const user = await prisma.user.findUnique({
        where: {
            username: req.body.username,
        },
    });

    if (!user) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    const isValid = await comparePassword(req.body.password, user.password);

    if (!isValid) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    const token = createJWT(user);
    res.status(200).json({ token });
};





