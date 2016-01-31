use agg
db.aggr.aggregate([
    {$match:
     {
	 state:"NY"
     }
    },
	{$group:
     {
	 _id: "$city",
	 max_pop:{$max:"$pop"}
     }
    },
	{$sort : {max_pop : -1} 
	},
	{$limit : 3}
])


