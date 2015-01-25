cd d:\Rana2\mongodb-win32-x86_64-2008plus-2.6.6\bin
mongod.exe --install --serviceName MongoDB1 --serviceDisplayName MongoDB1 --config D:\Rana2\custom_config\node1\mongo.cfg
mongod.exe --install --serviceName MongoDB2 --serviceDisplayName MongoDB2 --config D:\Rana2\custom_config\node2\mongo.cfg
mongod.exe --install --serviceName MongoDB3 --serviceDisplayName MongoDB3 --config D:\Rana2\custom_config\node3\mongo.cfg

mongod.exe --install --serviceName MongoDB4 --serviceDisplayName MongoDB4 --config D:\Rana2\custom_config\node4\mongo.cfg
mongod.exe --install --serviceName MongoDB5 --serviceDisplayName MongoDB5 --config D:\Rana2\custom_config\node5\mongo.cfg
mongod.exe --install --serviceName MongoDB6 --serviceDisplayName MongoDB6 --config D:\Rana2\custom_config\node6\mongo.cfg

mongod.exe --install --serviceName MongoDBConfig1 --serviceDisplayName MongoDBConfig1 --config D:\Rana2\custom_config\config1\mongo.cfg
mongod.exe --install --serviceName MongoDBConfig2 --serviceDisplayName MongoDBConfig2 --config D:\Rana2\custom_config\config2\mongo.cfg
mongod.exe --install --serviceName MongoDBConfig3 --serviceDisplayName MongoDBConfig3 --config D:\Rana2\custom_config\config3\mongo.cfg

net start MongoDB1
net start MongoDB2
net start MongoDB3
net start MongoDB4
net start MongoDB5
net start MongoDB6
net start MongoDBConfig1
net start MongoDBConfig2
net start MongoDBConfig3