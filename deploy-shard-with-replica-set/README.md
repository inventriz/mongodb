These scripts will help you to deploy a sharded cluster in windows.

The cluster has :
1 Mongos
3 Config DBs
2 Shards

Each shard is a replica set with 3 nodes each
1 Primary
1 secondary
1 arbiter

To deploy the cluster, please run the exe as follows:
1. start_prod_nodes.bat as a system administrator
2. Follow the instructions mentioned in the setup_prod_arch.txt

The sharded cluster is up and running on the port 27017.

To stop the nodes run stop_prod_nodes.bat as a system administrator.

