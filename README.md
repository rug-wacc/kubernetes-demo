**N.B**: these steps only apply to `Linux` systems (probably also works on `MacOS`, you might have to change to command for adding the minikube ip to your `hosts` file)

Install minikube according to the guide:
* It is assumed that you have already installed Docker
* Make sure virtualization is enabled in your BIOS
* https://kubernetes.io/docs/tasks/tools/install-minikube/

Create a single node Kubernetes cluster using minikube:
* `minikube start`
* Enable addon for ingress (installs `nginx` controller in the `kube-proxy` namespace): `minikube addons enable ingress`
* Enable addon for registry: `minikube addons enable registry`
* Let minikube use the docker daemon running on your host (this way you can locally build your Docker image, which minikube can then pull without having to go through a registry like Dockerhub): `eval $(minikube docker-env)`
* Add `minikube.info` with the ip of minikube as an entry to your hosts file: `echo "$(minikube ip) minikube.info" | sudo tee -a /etc/hosts`

Run the demo:
* Build the example Node.js Docker image: `docker build -t node-echo:v1 node-echo/ .` 
* `kubectl apply -f deployment.yaml`
* `kubectl apply -f service.yaml`
* `kubectl apply -f ingress.yaml`
* `watch -n 1 curl minikube.info -s; echo`
