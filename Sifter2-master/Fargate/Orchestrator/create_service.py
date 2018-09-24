import boto3

client = boto3.client('ecs')



response = client.create_service(
    cluster='my_cluster_test',
    desiredCount=1,
    serviceName='ecs-simple-service',
    taskDefinition='test:9',
    launchType='FARGATE',
    networkConfiguration={
        'awsvpcConfiguration': {
            'subnets': [
                'subnet-9b267db1',
            ],
            'securityGroups': [
                'sg-362d877e',
            ],
            'assignPublicIp': 'DISABLED'
        }
    }
)
