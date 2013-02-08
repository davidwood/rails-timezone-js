# rails-timezone-js

The [ActiveSupport TimeZone](http://api.rubyonrails.org/classes/ActiveSupport/TimeZone.html) class uses a time zone name format that differs from the format uses by the standard [Time Zone Database](http://www.iana.org/time-zones), maintained by the IANA.

`rails-timezone-js` provides functions to convert to and from the ActiveSupport time zone names, using the [mapping](https://github.com/rails/rails/blob/master/activesupport/lib/active_support/values/time_zone.rb#L35-180) found in ActiveSupport.

This library can be used in both node.js and the browser.

## Usage

The library provides two functions:

* `from(timezone)`: Convert from an ActiveSupport time zone name
* `to(tz)`: Convert to an ActiveSupport time zone name

### node.js

    npm install rails-timezone

### Browser

The functions are exposed via `window.RailsTimeZone`

