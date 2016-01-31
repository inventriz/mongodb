use agg;
db.aggr.aggregate([
    {$match:
     {
	 state:"NY"
     }
    }
]);