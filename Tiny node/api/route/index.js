module.exports=function(app){
    const controller=require('../controller/index')
    app.route('/item/')
        .get(controller.getItem)
        .post(controller.addItem)
        .delete(controller.deleteOne)
    app.route('/item/:id')
        .delete(controller.deleteItem)
        .put(controller.updateItem)
    app.route('/item/search/')
        .get(controller.searchItem)
    app.route('/item/id/:id')
        .get(controller.searchId)
}