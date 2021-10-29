# BitPay App v2
Welcome to BitPay App v2!

## Get Started
Install dependencies with `yarn` >= 14.15.0

### IOS

TEMPORARY - If using XCode 13 you will need to comment out the following in the Podfile before pod install
```
  # Enables Flipper.
  #
  # Note that if you have use_frameworks! enabled, Flipper will not work and
  # you should disable the next line.
  use_flipper!()

  post_install do |installer|
    react_native_post_install(installer)
  end
end
```

1. Install Pods `cd ios && pod install && cd ..`
2. `yarn start` to start dev server
3. Build and deploy to simulator `yarn ios` or device `yarn ios:device`

### Android
1. `yarn start` to start dev server
2. Build and deploy to simulator or device `yarn android`


### Redux Dev Tools
This project uses `react-redux` https://react-redux.js.org/ for state management. To take advantage of the tooling available, go to https://github.com/jhen0409/react-native-debugger and install the debugger.

1. To enable - make sure debugger is open - tap `D` in the hosting terminal window or shake the device 
2. A menu will popup - tap `Debug with Chrome`(IOS) or `Debug`(Android)
3. The logs should move from the terminal to the debugger


