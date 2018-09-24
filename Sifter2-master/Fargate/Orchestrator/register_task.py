import boto3

client = boto3.client('ecs')


response = client.register_task_definition(
    family='test',
    networkMode= 'awsvpc',
    cpu='256',
    memory='512',
    taskRoleArn='arn:aws:iam::967636366309:role/ecsExecutionRole',
    executionRoleArn='arn:aws:iam::967636366309:role/ecsExecutionRole',
    requiresCompatibilities=[
        'FARGATE'
    ],
    containerDefinitions=[
        {
            'name': 'testhttp',
            'command': [
                'sleep',
                '360',
            ],
            #'cpu': 256,
            'essential': True,
            "image": "967636366309.dkr.ecr.us-east-1.amazonaws.com/geppetto/httpd:latest",
            #'memory': 512,
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

    #taskRoleArn='',





