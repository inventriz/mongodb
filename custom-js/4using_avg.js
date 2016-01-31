use agg
db.aggr.aggregate([
    {$group:
     {
	 _id: "$state",
	 avg_pop:{$avg:"$pop"}
     }
    }
])


