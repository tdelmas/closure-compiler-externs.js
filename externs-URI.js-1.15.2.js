/**
 * @record
 */
function URIObject() {};

/** @type {string|undefined} */
URIObject.prototype.protocol;

/** @type {string|undefined} */
URIObject.prototype.username;

/** @type {string|undefined} */
URIObject.prototype.password;

/** @type {string|undefined} */
URIObject.prototype.hostname;

/** @type {string|undefined} */
URIObject.prototype.port;

/** @type {string|undefined} */
URIObject.prototype.path;

/** @type {string|undefined} */
URIObject.prototype.query;

/** @type {string|undefined} */
URIObject.prototype.fragment;


/**
 * @constructor
 * @nosideeffects
 * @return {!URI}
 * @param {URI|string|URIObject|Element=} arg1
 * @param {string=} absoluteTo
 * @see https://medialize.github.io/URI.js/docs.html#constructor
 */
function URI(arg1, absoluteTo) {}

/**
 * @nosideeffects
 * @return {!URI}
 * @see https://medialize.github.io/URI.js/docs.html#clone
 */
URI.prototype.clone = function() {};

/**
 * @return {string|!URI}
 * @see https://medialize.github.io/URI.js/docs.html#href
 */
URI.prototype.href = function() {};

/**
 * @param {string=} protocol
 * @return {string|!URI}
 * @throws {TypeError} on illegal input, that is anything but [a-z0-9.+-] and [empty string] and null
 * @see https://medialize.github.io/URI.js/docs.html#accessors-protocol
 */
URI.prototype.protocol = function(protocol) {};

/**
 * .scheme() is an alias of .protocol()
 * @param {string=} scheme
 * @return {string|!URI}
 * @throws {TypeError} on illegal input, that is anything but [a-z0-9.+-] and [empty string] and null
 * @see https://medialize.github.io/URI.js/docs.html#accessors-protocol
 */
URI.prototype.scheme = function(scheme) {};

/**
 * @param {string=} username
 * @return {string|!URI}
 * @see https://medialize.github.io/URI.js/docs.html#accessors-username
 */
URI.prototype.username = function(username) {};

/**
 * .hostname() returns the actual hostname, whereas .host() returns the hostname including the port
 * @param {string=} hostname
 * @return {string|!URI}
 * @see https://medialize.github.io/URI.js/docs.html#accessors-hostname
 */
URI.prototype.hostname = function(hostname) {};

/**
 * @param {string=} port
 * @return {string|!URI}
 * @throws {TypeError} on illegal input
 * although the port may be considered an integer, within URI it is a string.
 * @see https://medialize.github.io/URI.js/docs.html#accessors-port
 */
URI.prototype.port = function(port) {};

/**
 * .hostname() returns the actual hostname, whereas .host() returns the hostname including the port
 * @param {string=} host
 * @return {string|!URI}
 * @throws {TypeError} if path is part of the input
 * @see https://medialize.github.io/URI.js/docs.html#accessors-host
 */
URI.prototype.host = function(host) {};

/**
 * Userinfo is comprised of username and password
 * @param {string=} userinfo
 * @return {string|!URI}
 * @see https://medialize.github.io/URI.js/docs.html#accessors-userinfo
 */
URI.prototype.userinfo = function(userinfo) {};

/**
 * Authority is comprised of username, password, hostname and port
 * @param {string=} authority
 * @return {string|!URI}
 * @throws {TypeError} if path is part of the input
 * @see https://medialize.github.io/URI.js/docs.html#accessors-authority
 * .authority() will reset any of username, password and port if they're not specified.
 */
URI.prototype.authority = function(authority) {};

/**
 * .domain() is a convenience method that returns example.org from the hostname www.example.org.
 * @param {string|boolean=} domain
 * @return {string|!URI}
 * @throws {TypeError} if you pass it an empty string and on illegal input.
 * @see https://medialize.github.io/URI.js/docs.html#accessors-domain
 */
URI.prototype.domain = function(domain) {};

/**
 * .subdomain() is a convenience method that returns www from the hostname www.example.org.
 * @param {string=} subdomain
 * @return {string|!URI}
 * @throws {TypeError} on illegal input.
 * @see https://medialize.github.io/URI.js/docs.html#accessors-subdomain
 */
URI.prototype.subdomain = function(subdomain) {};

/**
 * .tld() is a convenience method that returns org from the hostname www.example.org.
 * @param {string|boolean=} tld
 * @return {string|!URI}
 * @throws {TypeError} if you pass it an empty string or use it on an IP-host.
 * @see https://medialize.github.io/URI.js/docs.html#accessors-tld
 */
URI.prototype.tld = function(tld) {};

/**
 * @param {string|boolean=} pathname
 * @return {string|!URI}
 * @see https://medialize.github.io/URI.js/docs.html#accessors-pathname
 */
URI.prototype.pathname = function(pathname) {};

/**
 * .path() is an alias of .pathname()
 * @param {string|boolean=} path
 * @return {string|!URI}
 * @see https://medialize.github.io/URI.js/docs.html#accessors-path
 */
URI.prototype.path = function(path) {};

/**
 * .directory() is an convenience method for mutating the directory part of a path
 * @param {string|boolean=} directory
 * @return {string|!URI}
 * @see https://medialize.github.io/URI.js/docs.html#accessors-directory
 */
URI.prototype.directory = function(directory) {};

/**
 * .filename() is an convenience method for mutating the filename part of a path
 * @param {string|boolean=} filename
 * @return {string|!URI}
 * @see https://medialize.github.io/URI.js/docs.html#accessors-filename
 */
URI.prototype.filename = function(filename) {};

/**
 * .suffix() is an convenience method for mutating the filename part of a path
 * @param {string|boolean=} suffix
 * @return {string|!URI}
 * @see https://medialize.github.io/URI.js/docs.html#accessors-suffix
 */
URI.prototype.suffix = function(suffix) {};

/**
 * .segment() allows convenient access to directory levels / URN segments within the path.
 * @param {string|number=} arg1
 * @param {string=} arg2
 * @return {string|!URI}
 * @see https://medialize.github.io/URI.js/docs.html#accessors-segment
 */
URI.prototype.segment = function(arg1,arg2) {};

/**
 * .segmentCoded() works the same way .segment() does, with the difference of transparently encoding and decoding values.
 * @param {string|number=} arg1
 * @param {string=} arg2
 * @return {string|!URI}
 * @see https://medialize.github.io/URI.js/docs.html#accessors-segmentCoded
 */
URI.prototype.segmentCoded = function(arg1,arg2) {};

/**
 * @param {string|boolean|Object<string,(string|Array<string>)>|function()=} search
 * @return {string|!URI}
 * @see https://medialize.github.io/URI.js/docs.html#accessors-search
 */
URI.prototype.search = function(search) {};

/**
 * @param {string=} hash
 * @return {string|!URI}
 * @see https://medialize.github.io/URI.js/docs.html#accessors-hash
 */
URI.prototype.hash = function(hash) {};

/**
 * @param {string=} fragment
 * @return {string|!URI}
 * @see https://medialize.github.io/URI.js/docs.html#accessors-hash
 */
URI.prototype.fragment = function(fragment) {};

/**
 * @param {string=} resource
 * @return {string|!URI}
 * @see https://medialize.github.io/URI.js/docs.html#accessors-resource
 */
URI.prototype.resource = function(resource) {};

/**
 * @param {string=} what
 * @return {boolean}
 * @see https://medialize.github.io/URI.js/docs.html#is
 */
URI.prototype.is = function(what) {};

/**
 * @param {string|Object<string,(string|Array<string>)>=} arg1
 * @param {string|Array<string>=} arg2
 * @return {!URI}
 * @see https://medialize.github.io/URI.js/docs.html#search-set
 */
URI.prototype.setSearch = function(arg1,arg2) {};

/**
 * .setQuery() is an alias of .setSearch()
 * @param {string|Object<string,(string|Array<string>)>=} arg1
 * @param {string|Array<string>=} arg2
 * @return {!URI}
 * @see https://medialize.github.io/URI.js/docs.html#search-set
 */
URI.prototype.setQuery = function(arg1,arg2) {};

/**
 * @param {string|Object<string,(string|Array<string>)>=} arg1
 * @param {string|Array<string>=} arg2
 * @return {!URI}
 * @see https://medialize.github.io/URI.js/docs.html#search-add
 */
URI.prototype.addSearch = function(arg1,arg2) {};

/**
 * .addQuery() is an alias of .addSearch()
 * @param {string|Object<string,(string|Array<string>)>=} arg1
 * @param {string|Array<string>=} arg2
 * @return {!URI}
 * @see https://medialize.github.io/URI.js/docs.html#search-add
 */
URI.prototype.addQuery = function(arg1,arg2) {};

/**
 * @param {string|Object<string,(string|Array<string>)>=} arg1
 * @param {string|Array<string>=} arg2
 * @return {!URI}
 * @see https://medialize.github.io/URI.js/docs.html#search-remove
 */
URI.prototype.removeSearch = function(arg1,arg2) {};

/**
 * .removeQuery() is an alias of .removeSearch()
 * @param {string|Object<string,(string|Array<string>|undefined)>|RegExp=} arg1
 * @param {string|Array<string>|RegExp=} arg2
 * @return {!URI}
 * @see https://medialize.github.io/URI.js/docs.html#search-remove
 */
URI.prototype.removeQuery = function(arg1,arg2) {};

/**
 * The method checks the existence and value of a given parameter within the query string.
 * @param {string} arg1
 * @param {string|boolean|Array<string>|RegExp|(function():boolean)=} arg2
 * @return {!URI}
 * @see https://medialize.github.io/URI.js/docs.html#search-has
 */
URI.prototype.hasSearch = function(arg1,arg2) {};

/**
 * .hasQuery() is an alias of .hasSearch().
 * @param {string} arg1
 * @param {string|boolean|Array<string>|RegExp|(function():boolean)=} arg2
 * @return {!URI}
 * @see https://medialize.github.io/URI.js/docs.html#search-has
 */
URI.prototype.hasQuery = function(arg1,arg2) {};

/**
 * executes normalizeProtocol(), normalizeHostname(), normalizePort(), normalizePath(), normalizeSearch(), normalizeHash()
 * @return {!URI}
 * @see https://medialize.github.io/URI.js/docs.html#normalize
 */
URI.prototype.normalize = function() {};

/**
 * @return {!URI}
 * @see https://medialize.github.io/URI.js/docs.html#normalize-protocol
 */
URI.prototype.normalizeProtocol = function() {};

/**
 * @return {!URI}
 * @see https://medialize.github.io/URI.js/docs.html#normalize-hostname
 */
URI.prototype.normalizeHostname = function() {};

/**
 * @return {!URI}
 * @see https://medialize.github.io/URI.js/docs.html#normalize-port
 */
URI.prototype.normalizePort = function() {};

/**
 * @return {!URI}
 * @see https://medialize.github.io/URI.js/docs.html#normalize-path
 */
URI.prototype.normalizePathname = function() {};

/**
 * .normalizePath() is an alias of .normalizePathname(), they resolve relative hierarchies
 * @return {!URI}
 * @see https://medialize.github.io/URI.js/docs.html#normalize-path
 */
URI.prototype.normalizePath = function() {};

/**Turns ?&foo=bar&&foo=bar&foo=baz& into ?foo=bar&foo=baz and removes ? if there is no query string.
 * @return {!URI}
 * @see https://medialize.github.io/URI.js/docs.html#normalize-search
 */
URI.prototype.normalizeSearch = function() {};

/**
 * Turns ?&foo=bar&&foo=bar&foo=baz& into ?foo=bar&foo=baz and removes ? if there is no query string.
 * @return {!URI}
 * @see https://medialize.github.io/URI.js/docs.html#normalize-search
 */
URI.prototype.normalizeQuery = function() {};

/**
 * removes # if there is no hash
 * @return {!URI}
 * @see https://medialize.github.io/URI.js/docs.html#normalize-hash
 */
URI.prototype.normalizeHash = function() {};

/**
 * removes # if there is no hash
 * @return {!URI}
 * @see https://medialize.github.io/URI.js/docs.html#normalize-hash
 */
URI.prototype.normalizeFragment = function() {};

/**
 * .iso8859() converts unicode-encoded escape sequences to ISO8859-encoded escape sequences. It does this by calling .normalize() internally.
 * @return {!URI}
 * @see https://medialize.github.io/URI.js/docs.html#iso8859
 */
URI.prototype.iso8859 = function() {};

/**
 * .unicode() converts ISO8859-encoded escape sequences to unicode-encoded escape sequences. It does this by calling .normalize() internally.
 * @return {!URI}
 * @see https://medialize.github.io/URI.js/docs.html#unicode
 */
URI.prototype.unicode = function() {};

/**
 * Formats URLs to be human readable (much like your browser does nowadays).
 * @return {string}
 * @nosideeffects
 * @see https://medialize.github.io/URI.js/docs.html#readable
 */
URI.prototype.readable = function() {};

/**
 * .relativeTo() compares two paths and makes one relative to the other
 * @param {string} arg1
 * @return {!URI}
 * @see https://medialize.github.io/URI.js/docs.html#relativeto
 */
URI.prototype.relativeTo = function(arg1) {};

/**
 * .absoluteTo() makes a relative path absolute based on another path
 * @param {string} arg1
 * @return {!URI}
 * @see https://medialize.github.io/URI.js/docs.html#absoluteto
 */
URI.prototype.absoluteTo = function(arg1) {};

/**
 * .equals() determines if the given URLs are the same - disregarding default ports, capitalization, dot-pathnames, query-parameter order, etc.
 * @param {URI|string|URIObject|Element} arg1
 * @return {boolean}
 * @see https://medialize.github.io/URI.js/docs.html#absoluteto
 */
URI.prototype.equals = function(arg1) {};

/**
 * parses a string into its URI components. returns an object containing the found components
 * @param {string} arg1
 * @return {URIObject}
 * @see https://medialize.github.io/URI.js/docs.html#parse
 */
URI.parse = function(arg1) {};

/**
 * parses a string's beginning into its URI components username, password, hostname, port. Found components are appended to the parts parameter. Remaining string is returned
 * @param {string} arg1
 * @param {Object} arg2
 * @return {string}
 * @see https://medialize.github.io/URI.js/docs.html#static-parseAuthority
 */
URI.parseAuthority = function(arg1, arg2) {};

/**
 * parses a string's beginning into its URI components username, password. Found components are appended to the parts parameter. Remaining string is returned
 * @param {string} arg1
 * @param {Object} arg2
 * @return {string}
 * @see https://medialize.github.io/URI.js/docs.html#static-parseUserinfo
 */
URI.parseUserinfo = function(arg1, arg2) {};

/**
 * parses a string's beginning into its URI components hostname, port. Found components are appended to the parts parameter. Remaining string is returned
 * @param {string} arg1
 * @param {Object} arg2
 * @return {string}
 * @see https://medialize.github.io/URI.js/docs.html#static-parseHost
 */
URI.parseHost = function(arg1, arg2) {};

/**
 * Parses the passed query string into an object. Returns object {propertyName: propertyValue}
 * @param {string} arg1
 * @param {Object} arg2
 * @return {string}
 * @see https://medialize.github.io/URI.js/docs.html#static-parseQuery
 */
URI.parseQuery = function(arg1, arg2) {};

/**
 * serializes the URI components passed in parts into a URI string
 * @param {URIObject} parts
 * @return {string}
 * @see https://medialize.github.io/URI.js/docs.html#static-build
 */
URI.build = function(parts) {};

/**
 * serializes the URI components username, password, hostname, port passed in parts into a URI string
 * @param {URIObject} parts
 * @return {string}
 * @see https://medialize.github.io/URI.js/docs.html#static-buildAuthority
 */
URI.buildAuthority = function(parts) {};

/**
 * serializes the URI components username, password passed in parts into a URI string
 * @param {URIObject} parts
 * @return {string}
 * @see https://medialize.github.io/URI.js/docs.html#static-buildUserinfo
 */
URI.buildUserinfo = function(parts) {};

/**
 * serializes the URI components hostname, port passed in parts into a URI string
 * @param {URIObject} parts
 * @return {string}
 * @see https://medialize.github.io/URI.js/docs.html#static-buildHost
 */
URI.buildHost = function(parts) {};

/**
 * serializes the query string parameters
 * @param {Object} data
 * @param {boolean} arg2
 * @return {string}
 * @see https://medialize.github.io/URI.js/docs.html#static-buildQuery
 */
URI.buildQuery = function(data,arg2) {};

/**
 * Encode an URI component with strict compliance to RFC3986
 * @param {string} arg1
 * @return {string}
 * @see https://medialize.github.io/URI.js/docs.html#static-encode
 */
URI.encode = function(arg1) {};

/**
 * Decode an URI component
 * @param {string} arg1
 * @return {string}
 * @see https://medialize.github.io/URI.js/docs.html#static-decode
 */
URI.decode = function(arg1) {};

/**
 * Encode an URI component whilst preserving reserved characters
 * @param {string} arg1
 * @return {string}
 * @see https://medialize.github.io/URI.js/docs.html#static-encodeReserved
 */
URI.encodeReserved = function(arg1) {};

/**
 * Encode a query string component.
 * Works like encode(), except it handles %20 as + (space) if URI.escapeQuerySpace = true;.
 * @param {string} arg1
 * @return {string}
 * @see https://medialize.github.io/URI.js/docs.html#static-encodeQuery
 */
URI.encodeQuery = function(arg1) {};

/**
 * Decode a query string component.
 * Works like decode(), except it handles + as %20 (space) if URI.escapeQuerySpace = true;.
 * @param {string} arg1
 * @return {string}
 * @see https://medialize.github.io/URI.js/docs.html#static-decodeQuery
 */
URI.decodeQuery = function(arg1) {};

/**
 * removes URI variables from global scope
 * @param {boolean} arg1
 * @see https://medialize.github.io/URI.js/docs.html#static-noConflict
 */
URI.noConflict = function(arg1) {};

/**
 * adds data to a map
 * @param {Object<string,(string|Array<string>)>} arg1
 * @param {string|Object<string,(string|Array<string>)>} arg2
 * @param {string=} arg3
 * @see https://medialize.github.io/URI.js/docs.html#static-addQuery
 */
URI.addQuery = function(arg1, arg2, arg3) {};

/**
 * removes data from a map
 * @param {Object<string,(string|Array<string>)>} arg1
 * @param {string|Object<string,(string|Array<string>|undefined)>} arg2
 * @param {string=} arg3
 * @see https://medialize.github.io/URI.js/docs.html#static-removeQuery
 */
URI.removeQuery = function(arg1, arg2, arg3) {};

/**
 * URI.commonPath() determines the common base directory of two paths.
 * @param {string} arg1
 * @param {string} arg2
 * @return {string}
 * @see https://medialize.github.io/URI.js/docs.html#static-commonPath
 */
URI.commonPath = function(arg1, arg2) {};

/**
 * @param {string} arg1
 * @param {function()} arg2
 * @param {Object} arg3
 * @return {string}
 * @see https://medialize.github.io/URI.js/docs.html#static-withinString
 */
URI.withinString = function(arg1, arg2, arg3) {};

/**
 * URI.iso8859() tells URI.js to use the older escape/unescape methods, for backwards compatibility with non-unicode platforms.
 * @see https://medialize.github.io/URI.js/docs.html#static-iso8859
 */
URI.iso8859 = function() {};

/**
 * URI.unicode() restores the default unicode-encoded URLs.
 * @see https://medialize.github.io/URI.js/docs.html#static-iso8859
 */
URI.unicode = function() {};

/**
 * URI.expand() is a convenience wrapper for URITemplate. While URITemplate#expand returns a string, URI.expand() returns an URI instance.
 * @param {string} arg1
 * @param {Object} arg2
 * @return {string}
 * @see https://medialize.github.io/URI.js/docs.html#static-expand
 */
URI.expand = function(arg1, arg2) {};
