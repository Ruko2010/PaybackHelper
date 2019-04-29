// ==UserScript==
// @name         Activate All Payback Coupons
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Activating all Coupons on Payback.com with one click
// @author       Ruko2010
// @copyright    2019 Ruko2010
// @license      GNU General Public License v2.0
// @include      http*://www.payback.de/pb/couponcenter/*
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js
// @require      http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var span = document.createElement("span");
    span.innerHTML = '<input type="button" href="javascript:void(0);" title="Activate all Coupons" value="Activate all Coupons">';
    span.addEventListener("click", function(){
        alert('Starting the Work');
        $('#notActivatedCoupons .not-activated').each(function(){
            $(this).click();
        });
        alert('Done');
    }, false);
    $('#couponFilter').append(span);
})();
