import sys
import boto3
import datetime

class Tasks_fargate:
	
	def __init__(self,id_client=None,vcpu=256,mem=512,starttime=None,name_cluster='test123',name_task=None,name_service=None):
	 	self.id_client=id_client
	 	self.vcpu=vcpu
	 	self.mem=mem
	 	self.starttime=starttime
	 	self.name_cluster=name_cluster
	 	self.name_task=name_task
	 	self.name_service=name_service
	 	print(vcpu)
	 
	def create_task(self,name_task,vcpu,mem):
	 	client = boto3.client('ecs')
	 	response = client.register_task_definition(
    		family=name_task,
    		networkMode= 'awsvpc',
    		cpu=vcpu,
    		memory=mem,
    		taskRoleArn='arn:aws:iam::967636366309:role/ecsExecutionRole',
    		executionRoleArn='arn:aws:iam::967636366309:role/ecsExecutionRole',
    		requiresCompatibilities=[
    	    	'FARGATE'
    		],
    		containerDefinitions=[
        	{
            	'name': 'testhttp',
            	'command': [
                	#'sleep',
                	#'360',
            	],
            	'essential': True,
            	"image": "967636366309.dkr.ecr.us-east-1.amazonaws.com/geppetto/httpd:latest",
		"memory": 512,
		"cpu": 256,
		"name": "hello",
            	'portMappings': [
             	{
          		"hostPort": 80,
          		"protocol": "tcp",
          		"containerPort": 80
             	}
   	     		],
        	},
    		],
    		)
		print(response)



	 
	def create_cluster(self,name_cluster):
		client = boto3.client('ecs')
		response = client.create_cluster(
    	clusterName=name_cluster,
		)
		print(response)
	 	
	def create_service(self,name_service,name_cluster,name_task):
		client = boto3.client('ecs')
		response = client.create_service(
    		cluster=name_cluster,
    		desiredCount=1,
    		serviceName=name_service,
    		taskDefinition=name_task,
    		launchType='FARGATE',
    		networkConfiguration={
        	'awsvpcConfiguration': {
            	'subnets': [
                	'subnet-9b267db1',
            	],
            	'securityGroups': [
                	'sg-362d877e',
            	],
            	#'assignPublicIp': 'DISABLED'
            	'assignPublicIp': 'ENABLED'
        	}
    		}
		)
		print(response)

	def delete_cluster():
		client = boto3.client('ecs')
		response = client.delete_cluster(
    		clusterName=name_cluster,
		)

C=Tasks_fargate()
#C.create_cluster('test123')
#C.create_task('tasktest123','256','512')
C.create_service('servicetest123','test123','proj10025')
dt = datetime.datetime.now()
print(dt)
