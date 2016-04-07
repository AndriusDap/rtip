
interface Window { 
    StatusBar: any; 
}

module RailTech {

angular.module('railtech', [
        // External
        'ionic',  
        'ionic-material', 
        'ionMdInput',
        'ionic-native-transitions',

        // Internal
        'thingsToDo',
        'staffrepay',
        'repay'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            window.StatusBar.styleDefault();
        }
    });
});

}

