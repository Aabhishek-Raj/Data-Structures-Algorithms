

const hi = aggregate([{ $group: { _id: '$name', Total: { $sum: '$orginalprice' }, avg: { $avg: '$sales' }, minSales: { $min: '$sales' } } }, { $match: { 'avg': 0 } }])