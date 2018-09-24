import boto3

client = boto3.client('ecs')


response = client.run_task(
    cluster='my_cluster_test',
    taskDefinition='test:9',
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

print(response)
