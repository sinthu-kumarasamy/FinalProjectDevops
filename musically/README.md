# musically
# DevOps Final Project
The project RockStar App allows us to view lyrics for a given song. 

## Introduction
The source code contains code for the application, kube manifests, the k8s deployment YAMLs and Terraform scripts to provision resources on AWS.

## Steps to run
- Download the code from canvas
- CD to terraform folder and type ```terraform init``` ```terraform plan``` ```terraform apply```
- Do not give build folder in gitignore   
- All the kubemanifests commands and steps are given in buildspec.yaml
- Follow the steps in documentation to create AWS codecommit, codebuild, codepipeline
- Push the code to code commit and initiate code build
- The svc external ip is displayed Build Logs
- Copy the link and run the application on the browser 