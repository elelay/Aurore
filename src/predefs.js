var _ = require("underscore");

module.exports.predefPrototypes = {
    // Mongo.Collection functions, from docs.meteor.com
    "Meteor.Collection": "Mongo.Collection",
    "Mongo.Collection": {
        _ensureIndex: 3,
        allow: 1,
        deny: 1,
        insert: 2,
        find: 2,
        findOne: 2,
        rawCollection: 0,
        rawDatabase: 0,
        remove: 2,
        update: 4,
        upsert: 4,
        // https://github.com/meteorhacks/meteor-aggregate
        aggregate: 2
    },
    // https://github.com/meteor/promise
    "Promise": {
        await: 1,
        "catch": 1,
        then: 2
    },
    // Tracker.Dependency functions, from docs.meteor.com
    "Tracker.Dependency": {
        client: {
            changed: 0,
            depend: 1,
            hasDependent: 0
        }
    },
    // ReactiveVar functions, from docs.meteor.com
    "ReactiveVar": {
        client: {
            get: 0,
            set: 1
        }
    },
    // Logger, from jag:pince
    "Logger": {
        trace: 10000,
        debug: 10000,
        info: 10000,
        warn: 10000,
        error: 10000
    },
    // Templates
    "Template": {
        events: 1,
        helpers: 1,
        onCreated: 1,
        onDestroyed: 1,
        onRendered: 1
    }
};

module.exports.predefObjects = {
    "Presences": {
        lib: "Mongo.Collection"
    },
    "Meteor.users": {
        lib: "Mongo.Collection"
    },
    "ServiceConfiguration.configurations": {
        lib: "Mongo.Collection"
    }
};

module.exports.predefs = {
    // docs.meteor.com
    "Accounts": {
        lib: {
            _storedLoginToken: 0,
            createUser: 2,
            onLogin: 1,
            oauth: -1 // oauth package
        },
        client: {
            ui: -1
        },
        server: {
            addAutopublishFields: 1,
            onCreateUser: 1,
            validateNewUser: 1
        }
    },
    // https://github.com/meteor-useraccounts/core/blob/master/lib/client.js
    "AccountsTemplates": {
        client: {
            setState: 2
        },
        lib: {
            configure: 1,
            removeField: 1,
            addFields: 1
        }
    },
    // https://github.com/flowkey/bigscreen/
    "BigScreen": {
        client: {
            exit: 0,
            request: 4
        }
    },
    // docs.meteor.com
    "Blaze": {
        client: {
            getData: 1,
            getView: 2
        }
    },
    // https://github.com/kadirahq/blaze-layout
    "BlazeLayout": {
        client: {
            render: 2,
            setRoot: 1
        }
    },
    // https://atmospherejs.com/meteor/browser-policy
    "BrowserPolicy": {
        server: {
            content: -1,
            "content.allowDataUrlForAll": 0,
            "content.allowEval": 0,
            "content.allowImageOrigin": 1,
            "content.allowInlineScripts": 0,
            "content.allowInlineStyles": 0,
            "content.allowOriginForAll": 1,
            "content.allowSameOriginForAll": 0,
            "content.disallowAll": 0,
            "content.disallowEval": 0,
            "content.disallowInlineScripts": 0,
            "content.disallowInlineStyles": 0,
            framing: -1,
            "framing.allowAll": 0,
            "framing.disallow": 0,
            "framing.restrictToOrigin": 1
        }
    },
    // https://github.com/meteorhacks/cluster
    "Cluster": {
        lib: {
            connect: 2,
            discoverConnection: 1,
            register: 2
        }
    },
    // http://docs.meteor.com/api/check.html
    "check": {
        lib: {
            __apply__: 2
        }
    },
    "DDP": {
        lib: {
            connect: 1
        }
    },
    // https://github.com/kadirahq/meteor-dochead
    "DocHead": {
        client: {
            loadScript: 3
        },
        lib: {
            addMeta: 1,
            addLdJsonScript: 1,
            addLink: 1,
            getTitle: 0,
            removeDocHeadAddedTags: 0,
            setTitle: 1
        }
    },
    // https://github.com/kadirahq/flow-router
    "FlowRouter": {
        lib: {
            current: 0,
            getParam: 1,
            getRouteName: 0,
            getQueryParam: 1,
            go: 3,
            group: 1,
            initialize: 0,
            onRouteRegister: 1,
            path: 3,
            reload: 0,
            route: 2,
            setParams: 1,
            setQueryParams: 1,
            triggers: -1,
            url: 3,
            wait: 0,
            watchPathChange: 0,
            withReplaceState: 1
        }
    },
    // https://nodejs.org/api/fs.html
    "Fs": {
        server: {

        }
    },
    // https://github.com/percolatestudio/meteor-google-api/
    "GoogleApi": {
        lib: {
            get: 3,
            post: 2
        }
    },
    "HTTP": {
        lib: {
            call: 4,
            del: 3,
            get: 3,
            post: 3,
            put: 3
        }
    },
    // https://github.com/Konecty/meteor-mongo-counter/
    "decrementCounter": {
        server: {
            __apply__: 3
        }
    },
    "incrementCounter": {
        server: {
            __apply__: 3
        }
    },
    "setCounter": {
        server: {
            __apply__: 3
        }
    },
    "Logger": {
        lib: {
            setLevel: 1,
            setLevels: 1,
            listener: -1
        }
    },
    // http://docs.meteor.com/api/check.html
    "Match": {
        lib: {
            test: 2,
            Any: -1,
            Integer: -1,
            Maybe: 1,
            ObjectIncluding: 1,
            OneOf: 10000,
            Optional: 1,
            Where: 1
        }
    },
    "Meteor": {
        client: {
            defer: 1, // https://github.com/meteor/meteor/issues/2176
            disconnect: 0,
            loggingIn: 0,
            loginWithPassword: 3,
            loginWithToken: 1,
            logout: 1,
            logoutOtherClients: 1,
            reconnect: 0,
            status: 0,
            subscribe: 10000
        },
        lib: {
            absoluteUrl: 2,
            apply: 4,
            bindEnvironment: 2,
            call: 10000,
            clearInterval: 1,
            clearTimeout: 1,
            isClient: -1,
            isServer: -1,
            isCordova: -1,
            methods: 1,
            setInterval: 2,
            setTimeout: 2,
            settings: -1,
            release: -1,
            startup: 1,
            user: 0,
            userId: 0,
            wrapAsync: 2
        },
        server: {
            onConnection: 1,
            publish: 2
        }
    },
    // https://github.com/meteor/mobile-packages/blob/master/packages/mdg:camera/README.md
    "MeteorCamera": {
        client: {
            getPicture: 2
        }
    },
    // http://momentjs.com/docs/
    "moment": {
        lib: {
            __apply__: 4,
            defineLocale: 2,
            duration: 2,
            invalid: 1,
            locale: 2,
            normalizeUnits: 1,
            now: -1,
            updateLocale: 2,
            relativeTimeThreshold: 2
        }
    },
    "Npm": {
        server: {
            require: 1
        }
    },
    "OAuth": {
        // https://github.com/meteor/meteor/blob/dc3cd6eb92f2bdd1bb44000cdd6abd1e5d0285b1/packages/oauth/oauth_client.js
        client: {
            _loginStyle: 3,
            _stateParam: 3,
            launchLogin: 1
        },
        // https://github.com/meteor/meteor/blob/dc3cd6eb92f2bdd1bb44000cdd6abd1e5d0285b1/packages/oauth/oauth_server.js
        server: {
            registerService: 4,
            retrieveCredential: 2,
            sealSecret: 1
        }
    },
    // https://github.com/meteorhacks/picker
    "Picker": {
        server: {
            filter: 1,
            middleware: 1,
            route: 2
        }
    },
    // https://github.com/meteor/promise
    "Promise": {
        lib: {
            all: 1,
            async: 2,
            await: 1,
            awaitAll: 1,
            asyncApply: 4,
            race: 1,
            reject: 1,
            resolve: 1,
        }
    },
    // docs.meteor.com
    "Random": {
        lib: {
            choice: 1,
            fraction: 0,
            hexString: 1,
            id: 1,
            secret: 1
        }
    },
    // https://github.com/iron-meteor/iron-router/blob/57a295ef387aec2715a7b43efc694c3e6012b764/examples/route_controllers/route_controllers.js
    "RouteController": {
        lib: {
            extend: 1
        }
    },
    "Router": {
        client: {
            go: 3,
            path: 2
        },
        lib: {
            configure: 1,
            current: 0,
            route: 3,
            routes: -1,
            onBeforeAction: 1
        }
    },
    // docs.meteor.com
    "ServiceConfiguration": {
        lib: {
            configurations: -1
        }
    },
    "Session": {
        client: {
            equals: 2,
            get: 1,
            set: 2,
            setDefault: 2

        }
    },
    // https://github.com/francocatena/meteor-status
    "Status": {
        client: {
            setTemplate: 2
        }
    },
    // https://github.com/TAPevents/tap-i18n/
    "TAPi18n": {
        client: {
            getLanguage: 0,
            setLanguage: 1,
        },
        lib: {
            "__": 3,
            getLanguages: 0,
            loadTranslations: 2
        }
    },
    // https://github.com/softwarerero/meteor-accounts-t9n
    "T9n": {
        lib: {
            get: 3,
            map: 2,
            setLanguage: 1
        }
    },
    "Template": {
        client: {
            body: -1,
            currentData: 0,
            instance: 0,
            parentData: 1,
            registerHelper: 2
        }
    },
    // https://github.com/mizzao/meteor-timesync/
    "TimeSync": {
        client: {
            isSynced: 0,
            loggingEnabled: -1,
            resync: 0,
            roundTripTime: 0,
            serverOffset: 0,
            serverTime: 2,
        }
    },
    "Tracker": {
        client: {
            active: -1,
            afterFlush: 1,
            currentComputation: -1,
            flush: 0,
            nonreactive: 1,
            onInvalidate: 1
        },
        lib: {
            autorun: 2
        }
    },
    // https://github.com/lablancas/twitter
    "Twitter": {
        server: {
            getAsync: 4,
            postAsync: 4,
            streamAsync: 4
        }
    },
    // https://github.com/percolatestudio/publish-counts
    "Counts": {
        client: {
            get: 1,
            has: 1
        },
        server: {
            publish: 4,
            noWarnings: 0
        }
    },
    "Facts": {
        server: {
            setUserIdFilter: 1
        }
    },
    "UI": {
        client: {
            registerHelper: 2
        }
    },
    // http://devdocs.io/underscore/
    "_": {
        lib: {
            after: 2,
            all: 3,
            allKeys: 1,
            any: 3,
            before: 2,
            bind: 10000,
            bindAll: 10000,
            chain: 1,
            clone: 1,
            collect: 3,
            compact: 1,
            compose: 10000,
            constant: 1,
            contains: 3,
            countBy: 3,
            create: 2,
            debounce: 3,
            defaults: 10000,
            defer: 10000,
            delay: 10000,
            detect: 3,
            difference: 10000,
            drop: 2,
            each: 3,
            escape: 1,
            every: 3,
            extend: 10000,
            extendOwn: 10000,
            filter: 3,
            find: 3,
            findIndex: 3,
            findKey: 3,
            findLastIndex: 3,
            findWhere: 2,
            first: 2,
            flatten: 2,
            foldl: 4,
            foldr: 4,
            forEach: 3,
            functions: 1,
            groupBy: 3,
            has: 2,
            head: 2,
            identity: 1,
            includes: 3,
            indexBy: 3,
            indexOf: 3,
            initial: 2,
            inject: 4,
            intersection: 10000,
            invert: 1,
            invoke: 10000,
            isArguments: 1,
            isArray: 1,
            isBoolean: 1,
            isDate: 1,
            isElement: 1,
            isEmpty: 1,
            isEqual: 2,
            isError: 1,
            isFinite: 1,
            isFunction: 1,
            isMatch: 1,
            isNaN: 1,
            isNull: 1,
            isNumber: 1,
            isObject: 1,
            isRegExp: 1,
            isString: 1,
            isUndefined: 1,
            iteratee: 2,
            keys: 1,
            last: 2,
            lastIndexOf: 3,
            map: 3,
            mapObject: 3,
            matcher: 1,
            matches: 1,
            max: 3,
            memoize: 2,
            methods: 1,
            min: 3,
            mixin: 1,
            negate: 1,
            noConflict: 0,
            noop: 0,
            now: 0,
            object: 2,
            omit: 10000,
            once: 1,
            pairs: 1,
            partial: 10000,
            partition: 3,
            pick: 10000,
            pluck: 2,
            property: 1,
            propertyOf: 1,
            random: 2,
            range: 3,
            reduce: 4,
            reduceRight: 4,
            reject: 3,
            rest: 2,
            result: 3,
            sample: 2,
            select: 3,
            shuffle: 1,
            size: 1,
            some: 3,
            sortBy: 3,
            sortedIndex: 4,
            tail: 2,
            take: 2,
            tap: 2,
            template: 2,
            throttle: 3,
            times: 3,
            toArray: 1,
            unescape: 1,
            union: 10000,
            uniq: 3,
            uniqId: 1,
            unzip: 10000,
            values: 1,
            where: 2,
            without: 10000,
            wrap: 2,
            zip: 10000
        }
    }
};

module.exports.getPredefs = function(decls) {
    if (!decls.lib) throw "Missing decls.lib";
    if (!decls.server) throw "Missing decls.server";
    if (!decls.client) throw "Missing decls.client";

    _.each(module.exports.predefPrototypes, function(predefProto, predefProtoName) {
        if (_.isString(predefProto)) {
            module.exports.predefPrototypes[predefProtoName] = module.exports.predefPrototypes[predefProto];
            //console.log("installing proto", predefProto, "in alias", predefProtoName, module.exports.predefPrototypes[predefProtoName])
        }
    });

    _.each(module.exports.predefObjects, function(predefObject, predefObjectName) {
        module.exports.predefs[predefObjectName] = {};
        _.each(predefObject, function(protoName, domain) {
            var proto = module.exports.predefPrototypes[protoName];
            module.exports.predefs[predefObjectName][domain] = {};
            _.each(proto, function(arity, funName) {
                module.exports.predefs[predefObjectName][domain][funName] = arity;
            });
        });
    });

    _.each(module.exports.predefs, function(predef, globName) {

        function addPredef(decls, predefDecls) {
            _.each(predefDecls, function(arity, name) {
                var ident = globName +
                    ((name === "__apply__") ? "" : ("." + name));
                if (!decls[ident]) {
                    decls[ident] = {
                        loc: "<<" + globName + ">>",
                        type: (arity >= 0) ? "function" : "",
                        arity: arity
                    };
                }
            });
        }

        if (predef.lib) {
            addPredef(decls.lib, predef.lib);
        }
        if (predef.client) {
            addPredef(decls.client, predef.client);
        }
        if (predef.server) {
            addPredef(decls.server, predef.server);
        }
    });
};
