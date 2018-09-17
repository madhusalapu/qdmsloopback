/**
 * To run:
 *   DEBUG=loopback:connector:*,loopback:datasource,boot:test:* slc run
 * or
 *   DEBUG=loopback:connector:*,loopback:datasource,boot:test:* node server/server.js
 */

var _ = require('lodash');
var Promise = require('bluebird');

var path = require('path');
var fileName = path.basename(__filename, '.js'); // gives the filename without the .js extension
var debug = require('debug')('boot:test:'+fileName);

module.exports = function(app) {
    var createCategory=false;
    var createItems=false;
    if(createCategory){
        var category = app.models.category;

        var cat1 = {
            id: '3',
            categorName: 'cat123'
        };
        var cat2 = {
            id: '4',
            categorName: 'cat2'
        }; 
        var cats = [cat1, cat2];
        if(createCategory){
            category.create(
                cats,
                function(err, category) {
                    if (err) {
                        return debug(err);
                    }
                    debug(category);
                   
                }
            );
        }
    }
   

    if(createItems){
 var itemsModel=app.models.items;
 var item1={
     id:'111',
     itemName:'cat1_item_1',
     categoryId:'1'
 };
 var item2={
    id:'121',
    itemName:'cat2_item_1',
    categoryId:'2'
};
var item3={
    id:'131',
    itemName:'cat1_item_2',
    categoryId:'1'
};
var allItems=[item1,item2,item3];
itemsModel.create(
        allItems,
        function(err, items) {
            if (err) {
                return debug(err);
            }
            debug(items);
        }
    );
}
};