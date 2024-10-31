=== Login with NEAR ===
Tags: Near, login
Requires at least: 6.0.1
Requires PHP: 7.4
Tested up to: 6.5.2
Stable tag: 0.2.7
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

The Login with NEAR WordPress plugin empowers users to effortlessly register/login with NEAR wallets directly on your WordPress site.

== Description ==

Login with NEAR WordPress plugin allows to easy setup and customize login with NEAR functionality at your WordPress site by using simple shortcode [login_near_link].

**Benefits**

1. **Provides the most popular Near Wallets**: Seamlessly integrate with popular NEAR wallets:  "Mintbase Wallet" and "Here Wallet".

2. **NEAR Protocol Support**: Leverage the speed, low transaction fees and modern blockchain technology of the NEAR protocol.

3. **Effortless Registration and Login**: Users with NEAR wallets can seamlessly access your site's functionality and are automatically identified as WP Users.

4. **Call smart contracts from single endpoint**: Plugin is a wrapped implementation for official Near Wallet Selector (https://github.com/near/wallet-selector). If you use a smart contract it provides possibility to use limited access key for it. Also, you can make calls to change/view methods on another smart contracts.

5. **Customization Flexibility**: Modify login/logout button text and apply advanced styling with ease directly from the code.

== For WordPress developers ==
* Integrate smart contracts effortlessly and call them from logged-in users using simple JavaScript methods:7:
* View method: await window.mainWallet.viewMethod({contractId: string, method: string, args: {} }
* Change method: await window.mainWallet.callMethod({contractId: string, method: string, args: {}, gas: number, deposit: number})

= Important links =
* Plugin Demo: http://livedemo.kinsta.cloud/

== Screenshots ==

1. Fill the form with your configs: contract-id (your contract id, optional), login/logout button text (text that will be presented on frontend) classes (for extra styles), network (to use testnet or mainnet) screenshot-1.png.
2. Add shortcode to [login_near_link] to any place on your site.
3. Link will be on your site  screenshot-3.png.
4. For now plugin supports NearWallet, MyNearWallet, Here Wallet screenshot-4.png.
5. Logout button will replace login button after login screenshot-5.png.

== Changelog ==
= 0.0.2 =
* [Improvement] Improved wallet integration and contract calls
= 0.0.3 =
* [Improvement] Minor bugfix
= 0.0.4 =
* [Improvement] Provide demo link to readme
= 0.0.5 =
* [Improvement] Modify plugin title
= 0.0.6 =
* [Improvement] Minor bugfix
= 0.0.7 =
* [Improvement] Update description
= 0.0.8 =
* [Improvement] Minor bugfix
= 0.0.9 =
* [Improvement] Update description
= 0.1.0 =
* [Improvement] Provide is loaded for compatibility with another plugins
= 0.1.1 =
* [Improvement] set timeout on init form for better compatibility
= 0.1.2 =
* [Improvement] minor fix for composer issue
= 0.1.3 =
* [Improvement] fix structure
= 0.1.4 =
* [Improvement] fix structure
= 0.1.5 =
* [Improvement] fix structure
= 0.1.6 =
* [Improvement] minor fix warnings
= 0.1.7 =
* [Improvement] minor tested with 6.4.1
= 0.1.8 =
* [Improvement] fix tags
= 0.1.9 =
* [Improvement] fix wp version
= 0.2.0 =
* [Improvement] fix login script
= 0.2.1 =
* [Improvement] fix tags
= 0.2.2 =
* [Improvement] fix login script
= 0.2.3 =
* [Improvement] update scripts, support 6.5.2, change list of supported wallets
= 0.2.4 =
* [Improvement] fix js
= 0.2.5 =
* [Improvement] change readme and screenshots
= 0.2.6 =
* [Improvement] Bring back support for meteor and mynear wallet
= 0.2.7 =
* [Improvement] Replace mintbase wallet with bitte wallet