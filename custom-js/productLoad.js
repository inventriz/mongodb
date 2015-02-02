function generateReport() {
	
	var db = connect('localhost:27017/edureka');
	var aggr = db.getCollection('aggr');
	
	var zip = aggr.findOne();
	var result = aggr.aggregate(
		{$match:
		 {
		 state:"NY"
		 }
		},
		{$group:
		 {
		 _id: "$city",
		 population: {$sum:"$pop"},
		 }
		},
		{$project:
		 {
		 _id: 0,
		 city: "$_id",
		 population: 1,
		 }
		},
		{$sort:
		 {
		 population:-1
		 }
		},
		{$skip: 10},
		{$limit: 5}
	);
		
	db.logout();
	result.forEach(printjson);
	//return zip;
	//return result;
}

function createTestProductData(number){
	var db = connect('localhost:27017/ecom');
	var product = db.getCollection('product');
	
	var p = product.findOne();
	for(var i=0; i<=number; i++) {
		var itemNo = parseInt(p.partNumber);
		itemNo++;
	}
	 	
	return itemNo;
}