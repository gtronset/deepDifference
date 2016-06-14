_.mixin({
    deepDifference: function(a, b){

        var think = function(newObj, oldObj){
            var differences = {};

            if(_.isEmpty(oldObj)) return newObj;

            _.each(newObj, function(valueA, keyA, listA) {

                if(!_.isEqual(newObj[keyA], oldObj[keyA])){
                    differences[keyA] = valueA;

                    if(_.isObject(newObj[keyA]) && !_.isArray(newObj[keyA])){
                        differences[keyA] = think(newObj[keyA], oldObj[keyA]);
                    }
                }

            });
            return differences;
        };

        return think(a,b);
    }
});