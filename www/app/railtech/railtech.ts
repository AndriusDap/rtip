
interface Window { 
    StatusBar: any; 
}

module RailTech {

angular.module('railtech', [
        // External
        'ionic',  
        'ionic-material', 
        'ionMdInput',
        'angulartics', 
        'angulartics.google.analytics',
        '720kb.tooltips',

        // Internal
        'thingsToDo',
        'staffrepay',
        'repay']);
});

}

