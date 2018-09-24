import boto3

client = boto3.client('ecs')

response = client.create_cluster(
    clusterName='my_cluster_test',
)
