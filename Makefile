docker:
	docker build -t jonathanwthom/hilary-and-adam .
	docker run -it -p 3000:3000 -p 35729:35729 -v $(shell pwd):/app jonathanwthom/hilary-and-adam

