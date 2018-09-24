import boto3

client = boto3.client('ecs')

response = client.deregister_task_definition(
    taskDefinition='test:4'
)


print(response)

