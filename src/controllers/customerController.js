const controller = {};

controller.list = (req, res) =>{
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM customer',(err, customers) => {
            if(err){
                res.json(err);//en caso de error
            }
            console.log(customers);
            res.render('customers',{
                data: customers
            })
        });
    });
};

module.exports = controller;