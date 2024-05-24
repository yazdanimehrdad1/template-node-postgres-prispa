SERVICE_NAME = template_api
SERVICE_NAME = template_api
SERVICE_NAME = template_api
test-make:
	echo "Makefile is working"
setup:
	npm install

server_docker_container:
	docker build -f Dockerfile.dev -t $(SERVICE_NAME)_dev .  
	docker run -it -p 4000:5000 $(SERVICE_NAME)_dev  
