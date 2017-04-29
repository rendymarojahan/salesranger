angular.module('starter.services', [])

.factory('Auth', function ($firebaseAuth) {
        return $firebaseAuth(firebase.auth());
})

.factory('myCache', function ($cacheFactory) {
        return $cacheFactory('myCache', function ($cacheFactory) {
            return $cacheFactory('myCache');
        });
})

.factory('TransactionFactory', function ($firebaseArray, $q, myCache, $timeout) {
        var fb = firebase.database().ref();
        var ref = {};
        var overviewsRef = {};
        var articleRef = {};
        var blogRef = {};
        var ovRef = fb.child("overviews");
        var cRef = fb.child("blogs");
        var mRef = fb.child("emails");
        return {
            ref: function () {
                ref = fb.child("publics").child(thisPublicId).child(thisUserId);
                return ref;
            },
            ovRef: function () {
                return ovRef;
            },
            cRef: function () {
                return cRef;
            },
            mRef: function () {
                return mRef;
            },
            getOverviews: function () {
                ref = fb.child("overviews");
                overviewsRef = $firebaseArray(ref);
                return overviewsRef;
            },
            getOverview: function (overviewid) {
                var thisOverview = overviewsRef.$getRecord(overviewid);
                return thisOverview;
            },
            getProjects: function (article) {
                ref = fb.child("overviews").orderByChild("kind").equalTo(article);
                projectsRef = $firebaseArray(ref);
                return projectsRef;
            },
            getProject: function (projectid) {
                var deferred = $q.defer();
                ref = fb.child("overviews").child(projectid);
                ref.once("value", function (snap) {
                    deferred.resolve(snap.val());
                });
                return deferred.promise;
            },
            getBlogs: function () {
                ref = fb.child("blogs").orderByChild("dateupdated").limitToLast(20);
                blogsRef = $firebaseArray(ref);
                return blogsRef;
            },
            getBlog: function (blogid) {
                var thisBlog = blogsRef.$getRecord(blogid);
                return thisBlog;
            },
            getArticle: function (articleid) {
                var deferred = $q.defer();
                ref = fb.child("blogs").child(articleid);
                ref.once("value", function (snap) {
                    deferred.resolve(snap.val());
                });
                return deferred.promise;
            }
            
            
        };
})

.factory('MasterFactory', function ($firebaseArray, $q, myCache) {
        var fb = firebase.database().ref();
        var ref = {};
        var informationsRef = {};
        var infoRef = {};
        var featuresRef = {};
        var tagsRef = {};
        var miRef = fb.child("master").child("infos");
        var mfRef = fb.child("master").child("features");
        var mtRef = fb.child("master").child("tags");
        return {
            ref: function () {
                ref = fb.child("publics").child(thisPublicId).child(thisUserId);
                return ref;
            },
            miRef: function () {
                return miRef;
            },
            mfRef: function () {
                return mfRef;
            },
            mtRef: function () {
                return mtRef;
            },
            getInformations: function () {
                ref = fb.child("master").child("infos").orderByChild('title');
                informationsRef = $firebaseArray(ref);
                return informationsRef;
            },
            getInformation: function (informationid) {
                var thisInformation = informationsRef.$getRecord(informationid);
                return thisInformation;
            },
            getInfo: function (infoid) {
                var deferred = $q.defer();
                ref = fb.child("master").child("infos").child(infoid);
                ref.once("value", function (snap) {
                    deferred.resolve(snap.val());
                });
                return deferred.promise;
            },
            getTage: function (tagid) {
                var deferred = $q.defer();
                ref = fb.child("master").child("tags").child(tagid);
                ref.once("value", function (snap) {
                    deferred.resolve(snap.val());
                });
                return deferred.promise;
            },
            getFeat: function (featureid) {
                var deferred = $q.defer();
                ref = fb.child("master").child("features").child(featureid);
                ref.once("value", function (snap) {
                    deferred.resolve(snap.val());
                });
                return deferred.promise;
            },
            getFeatures: function () {
                ref = fb.child("master").child("features").orderByChild('title');
                featuresRef = $firebaseArray(ref);
                return featuresRef;
            },
            getFeature: function (featureid) {
                var thisFeature = featuresRef.$getRecord(featureid);
                return thisFeature;
            },
            getTags: function () {
                ref = fb.child("master").child("tags").orderByChild('title');
                tagsRef = $firebaseArray(ref);
                return tagsRef;
            },
            getTag: function (tagid) {
                var thisTag = tagsRef.$getRecord(tagid);
                return thisTag;
            }
            
            
        };
})

.factory('ContactsFactory', function ($firebaseArray, $q, myCache) {
        var fb = firebase.database().ref();
        var ref = {};
        var contactsRef = {};
        var profileRef = {};
        var eRef = fb.child("profile");
        return {
            ref: function () {
                ref = fb.child("publics").child(thisPublicId).child(thisUserId);
                return ref;
            },
            eRef: function () {
                return eRef;
            },
            getContacts: function () {
                ref = fb.child("users").orderByKey();
                contactsRef = $firebaseArray(ref);
                return contactsRef;
            },
            getEmployee: function (employeeid) {
                var thisEmployee = contactsRef.$getRecord(employeeid);
                return thisEmployee;
            },
            getProfile: function () {
                ref = fb.child("profile").orderByChild("dateupdated").limitToLast(1);
                profileRef = $firebaseArray(ref);
                return profileRef;
            },
            getUser: function (employeeid) {
                var thisEmployee = profileRef.$getRecord(employeeid);
                return thisEmployee;
            },
            
            
        };
})

    
;

function RandomHouseCode() {
    return Math.floor((Math.random() * 100000000) + 100);
}