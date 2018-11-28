import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { QuestionList } from '../../components/lists/index';
import PanelInfo from '../../components/PanelInfo';
import * as actions from './actions';
import AppHistory from '../../app/history';
import getQueryParams from '../../lib/utils/locationExtensions';

const questionData2 = [
    {
        "tags": [
            "wordpress",
            "ssl",
            "redirect",
            "admin"
        ],
        "owner": {
            "reputation": 13,
            "user_id": 8616090,
            "user_type": "registered",
            "profile_image": "https://lh5.googleusercontent.com/-LzKx6u7Ddo4/AAAAAAAAAAI/AAAAAAAAB5k/Rp71kmiar9g/photo.jpg?sz=128",
            "display_name": "Dennis van Rijswijk",
            "link": "https://stackoverflow.com/users/8616090/dennis-van-rijswijk"
        },
        "is_answered": false,
        "view_count": 15,
        "answer_count": 0,
        "score": 1,
        "last_activity_date": 1543426265,
        "creation_date": 1543422947,
        "last_edit_date": 1543426265,
        "question_id": 53524140,
        "link": "https://stackoverflow.com/questions/53524140/wordpress-site-with-http-and-without-www-redirects-to-login",
        "title": "Wordpress site (with http_// and without www) redirects to login"
    },
    {
        "tags": [
            "ios",
            "iphone",
            "json",
            "httprequest"
        ],
        "owner": {
            "reputation": 209,
            "user_id": 2741293,
            "user_type": "registered",
            "profile_image": "https://graph.facebook.com/100000230438350/picture?type=large",
            "display_name": "jmac",
            "link": "https://stackoverflow.com/users/2741293/jmac"
        },
        "is_answered": true,
        "view_count": 33167,
        "answer_count": 6,
        "score": 18,
        "last_activity_date": 1543422135,
        "creation_date": 1393492663,
        "question_id": 22063959,
        "link": "https://stackoverflow.com/questions/22063959/post-request-using-application-x-www-form-urlencoded",
        "title": "POST request using application/x-www-form-urlencoded"
    },
    {
        "tags": [
            "spring-boot",
            "spring-cloud",
            "netflix-feign",
            "spring-cloud-feign"
        ],
        "owner": {
            "reputation": 3,
            "user_id": 9273055,
            "user_type": "registered",
            "profile_image": "https://www.gravatar.com/avatar/7b213c25e82637b86893cc224f7b3f22?s=128&d=identicon&r=PG&f=1",
            "display_name": "JensV",
            "link": "https://stackoverflow.com/users/9273055/jensv"
        },
        "is_answered": false,
        "view_count": 4,
        "answer_count": 0,
        "score": 0,
        "last_activity_date": 1543414598,
        "creation_date": 1543414598,
        "question_id": 53521488,
        "link": "https://stackoverflow.com/questions/53521488/feignclient-api-call-with-application-x-www-form-urlencoded-header",
        "title": "FeignClient API-Call with application/x-www-form-urlencoded HEADER"
    },
    {
        "tags": [
            "firebase",
            "vue.js",
            "dns",
            "firebase-hosting"
        ],
        "owner": {
            "reputation": 4,
            "user_id": 10004499,
            "user_type": "registered",
            "profile_image": "https://i.stack.imgur.com/a6dGI.jpg?s=128&g=1",
            "display_name": "Syntax Hacker",
            "link": "https://stackoverflow.com/users/10004499/syntax-hacker"
        },
        "is_answered": false,
        "view_count": 23,
        "answer_count": 1,
        "score": 0,
        "last_activity_date": 1543407939,
        "creation_date": 1542884319,
        "last_edit_date": 1542885386,
        "question_id": 53429442,
        "link": "https://stackoverflow.com/questions/53429442/domain-with-www-prefix-not-working-on-firebase-hosting",
        "title": "domain with www prefix not working on firebase hosting"
    },
    {
        "tags": [
            "web",
            "nginx",
            "nginx-reverse-proxy",
            "no-www"
        ],
        "owner": {
            "reputation": 64,
            "user_id": 7427398,
            "user_type": "registered",
            "accept_rate": 32,
            "profile_image": "https://www.gravatar.com/avatar/efb6045e64549182e5a7f946af621ee5?s=128&d=identicon&r=PG&f=1",
            "display_name": "ksernow",
            "link": "https://stackoverflow.com/users/7427398/ksernow"
        },
        "is_answered": false,
        "view_count": 11,
        "answer_count": 1,
        "score": 0,
        "last_activity_date": 1543388160,
        "creation_date": 1543387244,
        "last_edit_date": 1543387581,
        "question_id": 53513554,
        "link": "https://stackoverflow.com/questions/53513554/nginx-redirect-everything-to-www-https",
        "title": "Nginx redirect everything to www https"
    },
    {
        "tags": [
            "django",
            "apache",
            ".htaccess",
            "no-www"
        ],
        "owner": {
            "reputation": 188,
            "user_id": 1143558,
            "user_type": "registered",
            "accept_rate": 67,
            "profile_image": "https://www.gravatar.com/avatar/0df10f6c0872fc68fb664ef5c6a99372?s=128&d=identicon&r=PG",
            "display_name": "Ljubisa Livac",
            "link": "https://stackoverflow.com/users/1143558/ljubisa-livac"
        },
        "is_answered": true,
        "view_count": 782,
        "accepted_answer_id": 26444545,
        "answer_count": 4,
        "score": 0,
        "last_activity_date": 1543380371,
        "creation_date": 1413286042,
        "last_edit_date": 1413538870,
        "question_id": 26359718,
        "link": "https://stackoverflow.com/questions/26359718/django-remove-www-from-urls",
        "title": "Django - remove www from URLs"
    },
    {
        "tags": [
            "ruby-on-rails",
            "heroku"
        ],
        "owner": {
            "reputation": 77,
            "user_id": 7464146,
            "user_type": "registered",
            "accept_rate": 80,
            "profile_image": "https://www.gravatar.com/avatar/fbbc188471d2d189979a774fdf53b237?s=128&d=identicon&r=PG&f=1",
            "display_name": "Umar Ghouse",
            "link": "https://stackoverflow.com/users/7464146/umar-ghouse"
        },
        "is_answered": false,
        "view_count": 14,
        "answer_count": 1,
        "score": 0,
        "last_activity_date": 1543376646,
        "creation_date": 1543375150,
        "question_id": 53511602,
        "link": "https://stackoverflow.com/questions/53511602/if-i-have-a-www-domain-pointed-to-wix-can-i-point-a-sub-domain-to-heroku-and-ho",
        "title": "If I have a www domain pointed to Wix, can I point a sub-domain to Heroku and how would that affect SSL?"
    },
    {
        "tags": [
            ".htaccess"
        ],
        "owner": {
            "reputation": 1,
            "user_id": 10362563,
            "user_type": "registered",
            "profile_image": "https://lh5.googleusercontent.com/-In1ruW-J9EU/AAAAAAAAAAI/AAAAAAAACJc/qpRUrWgatg4/photo.jpg?sz=128",
            "display_name": "nerbo powajoj",
            "link": "https://stackoverflow.com/users/10362563/nerbo-powajoj"
        },
        "is_answered": false,
        "view_count": 27,
        "answer_count": 2,
        "score": 0,
        "last_activity_date": 1543356841,
        "creation_date": 1543087706,
        "question_id": 53461656,
        "link": "https://stackoverflow.com/questions/53461656/htaccess-http-www-redirects-to-www-www",
        "title": ".htaccess: http://www redirects to www.www"
    },
    {
        "tags": [
            "eclipse",
            "bookmarks"
        ],
        "owner": {
            "reputation": 142,
            "user_id": 5339776,
            "user_type": "registered",
            "profile_image": "https://lh5.googleusercontent.com/-iHqButg8UsU/AAAAAAAAAAI/AAAAAAAAABk/_oZUD9gnssc/photo.jpg?sz=128",
            "display_name": "LeonidMew",
            "link": "https://stackoverflow.com/users/5339776/leonidmew"
        },
        "is_answered": false,
        "view_count": 12,
        "answer_count": 0,
        "score": 0,
        "last_activity_date": 1543332972,
        "creation_date": 1543328031,
        "last_edit_date": 1543332972,
        "question_id": 53501639,
        "link": "https://stackoverflow.com/questions/53501639/eclipse-are-there-something-to-have-www-bookmarks-related-to-project",
        "title": "Eclipse. Are there something to have www bookmarks related to project?"
    },
    {
        "tags": [
            "php",
            "wordpress",
            ".htaccess",
            "url-redirection"
        ],
        "owner": {
            "reputation": 13,
            "user_id": 10711409,
            "user_type": "registered",
            "profile_image": "https://www.gravatar.com/avatar/e0f7c05604f7b78ff7c8c0468a6fce31?s=128&d=identicon&r=PG",
            "display_name": "mark clarke",
            "link": "https://stackoverflow.com/users/10711409/mark-clarke"
        },
        "is_answered": true,
        "view_count": 27,
        "accepted_answer_id": 53499542,
        "answer_count": 3,
        "score": 0,
        "last_activity_date": 1543329334,
        "creation_date": 1543320174,
        "last_edit_date": 1543320480,
        "question_id": 53499265,
        "link": "https://stackoverflow.com/questions/53499265/wordpress-htaccess-www-redirect-fail",
        "title": "Wordpress .htaccess www redirect fail"
    },
    {
        "tags": [
            "ruby-on-rails",
            "dokku"
        ],
        "owner": {
            "reputation": 104,
            "user_id": 2572248,
            "user_type": "registered",
            "accept_rate": 65,
            "profile_image": "https://i.stack.imgur.com/eZnef.jpg?s=128&g=1",
            "display_name": "Anton Ipatov",
            "link": "https://stackoverflow.com/users/2572248/anton-ipatov"
        },
        "is_answered": false,
        "view_count": 12,
        "answer_count": 1,
        "score": 0,
        "last_activity_date": 1543326927,
        "creation_date": 1543320864,
        "last_edit_date": 1543321888,
        "question_id": 53499470,
        "link": "https://stackoverflow.com/questions/53499470/cant-access-to-my-app-dokku-without-www",
        "title": "Can&#39;t access to my app Dokku without www?"
    },
    {
        "tags": [
            "c",
            "apache",
            "cgi"
        ],
        "owner": {
            "reputation": 1,
            "user_id": 9907651,
            "user_type": "registered",
            "profile_image": "https://lh4.googleusercontent.com/-vdnuVuzU7mo/AAAAAAAAAAI/AAAAAAAAAKg/v1LAxbmtf8o/photo.jpg?sz=128",
            "display_name": "Francesco Di Fusco",
            "link": "https://stackoverflow.com/users/9907651/francesco-di-fusco"
        },
        "is_answered": false,
        "view_count": 24,
        "answer_count": 1,
        "score": 0,
        "last_activity_date": 1543305635,
        "creation_date": 1543263684,
        "last_edit_date": 1543301513,
        "question_id": 53488457,
        "link": "https://stackoverflow.com/questions/53488457/why-doesnt-this-cgi-script-work-but-it-works-perfectly-as-a-a-standalone-progr",
        "title": "why doesn&#39;t this cgi script work, but it works perfectly as a a standalone program when executed in /var/www/cgi-bin/?"
    },
    {
        "tags": [
            "forms",
            "web-services",
            "rest",
            "postman"
        ],
        "owner": {
            "reputation": 4418,
            "user_id": 2730064,
            "user_type": "registered",
            "accept_rate": 80,
            "profile_image": "https://i.stack.imgur.com/L4T9w.jpg?s=128&g=1",
            "display_name": "Rohan",
            "link": "https://stackoverflow.com/users/2730064/rohan"
        },
        "is_answered": true,
        "view_count": 118097,
        "accepted_answer_id": 26730839,
        "answer_count": 3,
        "score": 138,
        "last_activity_date": 1543297534,
        "creation_date": 1415049858,
        "last_edit_date": 1415089122,
        "question_id": 26723467,
        "link": "https://stackoverflow.com/questions/26723467/what-is-the-difference-between-form-data-x-www-form-urlencoded-and-raw-in-the-p",
        "title": "What is the difference between form-data, x-www-form-urlencoded and raw in the Postman Chrome application?"
    },
    {
        "tags": [
            "amazon-web-services",
            "ssl",
            "lets-encrypt",
            "amazon-elastic-beanstalk"
        ],
        "owner": {
            "reputation": 72,
            "user_id": 2306438,
            "user_type": "registered",
            "accept_rate": 50,
            "profile_image": "https://www.gravatar.com/avatar/687ec87f59bf9da02690768a7a85f5f3?s=128&d=identicon&r=PG",
            "display_name": "KhacNha",
            "link": "https://stackoverflow.com/users/2306438/khacnha"
        },
        "is_answered": true,
        "view_count": 16,
        "accepted_answer_id": 53492165,
        "answer_count": 1,
        "score": 0,
        "last_activity_date": 1543288152,
        "creation_date": 1542764041,
        "question_id": 53404100,
        "link": "https://stackoverflow.com/questions/53404100/how-config-letsencrypt-ssl-for-non-www-and-www-domain-on-the-aws-elastic-beansta",
        "title": "How config letsencrypt ssl for non-www and www domain on the aws elastic beanstalk?"
    },
    {
        "tags": [
            "postman",
            "postman-collection-runner"
        ],
        "owner": {
            "reputation": 1936,
            "user_id": 1432503,
            "user_type": "registered",
            "accept_rate": 43,
            "profile_image": "https://www.gravatar.com/avatar/d3496c284bd9cc91133e9ebb920aa8ed?s=128&d=identicon&r=PG",
            "display_name": "Zed",
            "link": "https://stackoverflow.com/users/1432503/zed"
        },
        "is_answered": true,
        "view_count": 39,
        "accepted_answer_id": 53482204,
        "answer_count": 1,
        "score": 0,
        "last_activity_date": 1543239023,
        "creation_date": 1532261834,
        "question_id": 51465048,
        "link": "https://stackoverflow.com/questions/51465048/postman-and-setting-up-a-variable-in-the-body-of-x-www-form-urlencoded-request",
        "title": "Postman and setting up a variable in the body of x-www-form-urlencoded request"
    },
    {
        "tags": [
            ".htaccess"
        ],
        "owner": {
            "reputation": 2666,
            "user_id": 3359782,
            "user_type": "registered",
            "accept_rate": 51,
            "profile_image": "https://i.stack.imgur.com/0sih9.jpg?s=128&g=1",
            "display_name": "Lee",
            "link": "https://stackoverflow.com/users/3359782/lee"
        },
        "is_answered": true,
        "view_count": 21,
        "accepted_answer_id": 53318272,
        "answer_count": 1,
        "score": 1,
        "last_activity_date": 1543228535,
        "creation_date": 1542279863,
        "last_edit_date": 1543228458,
        "question_id": 53318047,
        "link": "https://stackoverflow.com/questions/53318047/trying-to-redirect-from-non-https-to-https-but-only-on-www-subdomain-in-htaccess",
        "title": "Trying to redirect from non-https to https but only on www subdomain in htaccess"
    },
    {
        "tags": [
            "php"
        ],
        "owner": {
            "reputation": 1,
            "user_id": 10705085,
            "user_type": "registered",
            "profile_image": "https://lh4.googleusercontent.com/-ty-NM-hMyPI/AAAAAAAAAAI/AAAAAAAAAO8/5q5G4Ur7yGI/photo.jpg?sz=128",
            "display_name": "Rajendra Verma",
            "link": "https://stackoverflow.com/users/10705085/rajendra-verma"
        },
        "is_answered": false,
        "view_count": 26,
        "answer_count": 0,
        "score": -2,
        "last_activity_date": 1543227884,
        "creation_date": 1543221818,
        "last_edit_date": 1543227884,
        "question_id": 53477376,
        "link": "https://stackoverflow.com/questions/53477376/how-to-redirect-non-ssl-to-ssl-with-www-through-httacess",
        "title": "How to redirect non SSL to SSL with www through .httacess?"
    },
    {
        "tags": [
            "rest",
            "spring-boot"
        ],
        "owner": {
            "reputation": 82,
            "user_id": 8035105,
            "user_type": "registered",
            "accept_rate": 40,
            "profile_image": "https://www.gravatar.com/avatar/98180960dd980a168a2c753fd63605b9?s=128&d=identicon&r=PG&f=1",
            "display_name": "ikiSiTamvaaan",
            "link": "https://stackoverflow.com/users/8035105/ikisitamvaaan"
        },
        "is_answered": false,
        "view_count": 13,
        "answer_count": 0,
        "score": 0,
        "last_activity_date": 1543218972,
        "creation_date": 1543218972,
        "question_id": 53476774,
        "link": "https://stackoverflow.com/questions/53476774/type-not-acceptable-status-406-error-in-spring-rest-for-producing-application-x",
        "title": "type=Not Acceptable, status=406 Error In Spring Rest For Producing application/x-www-form-urlencoded"
    },
    {
        "tags": [
            "spring",
            "spring-mvc",
            "model-view-controller"
        ],
        "owner": {
            "reputation": 1340,
            "user_id": 1029926,
            "user_type": "registered",
            "accept_rate": 64,
            "profile_image": "https://www.gravatar.com/avatar/8168d8bf390a4549a5b43e1a3c795e3d?s=128&d=identicon&r=PG",
            "display_name": "Somasundaram Sekar",
            "link": "https://stackoverflow.com/users/1029926/somasundaram-sekar"
        },
        "is_answered": true,
        "view_count": 90776,
        "accepted_answer_id": 38252958,
        "answer_count": 5,
        "score": 48,
        "last_activity_date": 1543216568,
        "creation_date": 1447912260,
        "last_edit_date": 1543216568,
        "question_id": 33796218,
        "link": "https://stackoverflow.com/questions/33796218/content-type-application-x-www-form-urlencodedcharset-utf-8-not-supported-for",
        "title": "Content type &#39;application/x-www-form-urlencoded;charset=UTF-8&#39; not supported for @RequestBody MultiValueMap"
    },
    {
        "tags": [
            "android",
            "unity3d",
            "mp3"
        ],
        "owner": {
            "reputation": 1,
            "user_id": 8603168,
            "user_type": "registered",
            "profile_image": "https://www.gravatar.com/avatar/9558dfd2d2fcdb50f4bce34808c77997?s=128&d=identicon&r=PG&f=1",
            "display_name": "MS.Song",
            "link": "https://stackoverflow.com/users/8603168/ms-song"
        },
        "is_answered": false,
        "view_count": 31,
        "answer_count": 2,
        "score": 0,
        "last_activity_date": 1543215641,
        "creation_date": 1543212591,
        "question_id": 53475574,
        "link": "https://stackoverflow.com/questions/53475574/unity-how-to-use-www-to-load-mp3-file-with-absolute-path-on-android",
        "title": "unity how to use www to load mp3 file with absolute path on android"
    },
    {
        "tags": [
            "dns",
            "google-cloud-platform",
            "google-cloud-storage",
            "cname",
            "no-www"
        ],
        "owner": {
            "reputation": 21,
            "user_id": 10698660,
            "user_type": "registered",
            "profile_image": "https://lh5.googleusercontent.com/-Oy0Dr9qFmHg/AAAAAAAAAAI/AAAAAAAAAAA/ABtNlbDxZS6YwCtCFq5RYdkH7LioJysomw/mo/photo.jpg?sz=128",
            "display_name": "proruzi",
            "link": "https://stackoverflow.com/users/10698660/proruzi"
        },
        "is_answered": false,
        "view_count": 27,
        "answer_count": 0,
        "score": 0,
        "last_activity_date": 1543191805,
        "creation_date": 1543191310,
        "last_edit_date": 1543191805,
        "question_id": 53473306,
        "link": "https://stackoverflow.com/questions/53473306/redirect-www-to-non-www-with-cloud-storage-bucket-static-site",
        "title": "Redirect www to non-www with cloud storage bucket static site"
    },
    {
        "tags": [
            "node.js",
            "docker",
            "express",
            "docker-volume",
            "docker-run"
        ],
        "owner": {
            "reputation": 3837,
            "user_id": 4753489,
            "user_type": "registered",
            "accept_rate": 88,
            "profile_image": "https://i.stack.imgur.com/gIxBq.jpg?s=128&g=1",
            "display_name": "Div",
            "link": "https://stackoverflow.com/users/4753489/div"
        },
        "is_answered": false,
        "view_count": 25,
        "answer_count": 0,
        "score": 0,
        "last_activity_date": 1543177529,
        "creation_date": 1543170327,
        "last_edit_date": 1543174107,
        "question_id": 53470551,
        "link": "https://stackoverflow.com/questions/53470551/node-js-project-with-docker-throwing-an-error-of-no-such-file-or-directory-var",
        "title": "Node Js project with Docker throwing an error of no such file or directory /var/www/package.json"
    },
    {
        "tags": [
            "php",
            ".htaccess",
            "ssl",
            "https",
            "opencart"
        ],
        "owner": {
            "reputation": 1349,
            "user_id": 630238,
            "user_type": "registered",
            "accept_rate": 61,
            "profile_image": "https://www.gravatar.com/avatar/4f223e240ce60c72805aa908245c44bb?s=128&d=identicon&r=PG",
            "display_name": "maaz",
            "link": "https://stackoverflow.com/users/630238/maaz"
        },
        "is_answered": true,
        "view_count": 60,
        "answer_count": 3,
        "score": 0,
        "last_activity_date": 1543170288,
        "creation_date": 1541704187,
        "question_id": 53214582,
        "link": "https://stackoverflow.com/questions/53214582/forcing-ssl-and-www-using-htaccess-for-a-subdomain",
        "title": "Forcing SSL and WWW using .htaccess for a subdomain"
    },
    {
        "tags": [
            "cordova"
        ],
        "owner": {
            "reputation": 1067,
            "user_id": 2881939,
            "user_type": "registered",
            "accept_rate": 52,
            "profile_image": "https://graph.facebook.com/100000776760878/picture?type=large",
            "display_name": "Sanjay Salunkhe",
            "link": "https://stackoverflow.com/users/2881939/sanjay-salunkhe"
        },
        "is_answered": false,
        "view_count": 13,
        "answer_count": 0,
        "score": 0,
        "last_activity_date": 1543141449,
        "creation_date": 1543141449,
        "question_id": 53466570,
        "link": "https://stackoverflow.com/questions/53466570/cordova-error-http-error-404-retrieving-version-3-6-3-of-cordova-for-www",
        "title": "Cordova error : HTTP error 404 retrieving version 3.6.3 of cordova for www"
    },
    {
        "tags": [
            "redirect",
            "nginx",
            "dns",
            "server"
        ],
        "owner": {
            "reputation": 1388,
            "user_id": 6806643,
            "user_type": "registered",
            "accept_rate": 63,
            "profile_image": "https://www.gravatar.com/avatar/e3d663edd9e4e255790b9bf2d955ba13?s=128&d=identicon&r=PG&f=1",
            "display_name": "Matt McManis",
            "link": "https://stackoverflow.com/users/6806643/matt-mcmanis"
        },
        "is_answered": true,
        "view_count": 3737,
        "accepted_answer_id": 43089681,
        "answer_count": 3,
        "score": 3,
        "last_activity_date": 1543102910,
        "creation_date": 1490744387,
        "last_edit_date": 1495541407,
        "question_id": 43081780,
        "link": "https://stackoverflow.com/questions/43081780/dns-records-redirect-www-to-non-www",
        "title": "DNS Records Redirect www to non-www"
    },
    {
        "tags": [
            ".htaccess",
            "mod-rewrite"
        ],
        "owner": {
            "reputation": 13590,
            "user_id": 253976,
            "user_type": "registered",
            "accept_rate": 88,
            "profile_image": "https://www.gravatar.com/avatar/2ad45d31210b3893868a79038f811ec4?s=128&d=identicon&r=PG",
            "display_name": "StackOverflowNewbie",
            "link": "https://stackoverflow.com/users/253976/stackoverflownewbie"
        },
        "is_answered": true,
        "view_count": 122206,
        "protected_date": 1481820646,
        "accepted_answer_id": 4958847,
        "answer_count": 8,
        "score": 94,
        "last_activity_date": 1543063123,
        "creation_date": 1297027308,
        "question_id": 4916222,
        "link": "https://stackoverflow.com/questions/4916222/htaccess-how-to-force-www-in-a-generic-way",
        "title": ".htaccess - how to force &quot;www.&quot; in a generic way?"
    },
    {
        "tags": [
            "apache",
            ".htaccess",
            "mod-rewrite",
            "redirect",
            "https"
        ],
        "owner": {
            "reputation": 1316,
            "user_id": 1486278,
            "user_type": "registered",
            "profile_image": "https://www.gravatar.com/avatar/6e98e327039bc9945fa5cf59c30c545f?s=128&d=identicon&r=PG",
            "display_name": "bigben",
            "link": "https://stackoverflow.com/users/1486278/bigben"
        },
        "is_answered": true,
        "view_count": 484047,
        "protected_date": 1415367754,
        "accepted_answer_id": 13997498,
        "answer_count": 12,
        "score": 257,
        "last_activity_date": 1543041717,
        "creation_date": 1356026332,
        "last_edit_date": 1450283531,
        "question_id": 13977851,
        "link": "https://stackoverflow.com/questions/13977851/htaccess-redirect-to-https-www",
        "title": "htaccess redirect to https://www"
    },
    {
        "tags": [
            "java",
            "post",
            "mime-types",
            "content-type"
        ],
        "owner": {
            "reputation": 45,
            "user_id": 3148559,
            "user_type": "registered",
            "accept_rate": 60,
            "profile_image": "https://www.gravatar.com/avatar/e6351fbebefb2fe33a2f3e2a8da5f9c7?s=128&d=identicon&r=PG",
            "display_name": "drimk",
            "link": "https://stackoverflow.com/users/3148559/drimk"
        },
        "is_answered": false,
        "view_count": 11218,
        "answer_count": 1,
        "score": 3,
        "last_activity_date": 1542981685,
        "creation_date": 1446013434,
        "last_edit_date": 1446027788,
        "question_id": 33384245,
        "link": "https://stackoverflow.com/questions/33384245/java-read-data-post-content-type-application-x-www-form-urlencoded",
        "title": "Java read data POST content-type application/x-www-form-urlencoded"
    },
    {
        "tags": [
            "apache",
            ".htaccess",
            "redirect"
        ],
        "owner": {
            "reputation": 26,
            "user_id": 1972525,
            "user_type": "registered",
            "profile_image": "https://www.gravatar.com/avatar/6d8a13044d029481b06c15f64235f630?s=128&d=identicon&r=PG",
            "display_name": "Dilip Gupta",
            "link": "https://stackoverflow.com/users/1972525/dilip-gupta"
        },
        "is_answered": false,
        "view_count": 16,
        "answer_count": 1,
        "score": 0,
        "last_activity_date": 1542971392,
        "creation_date": 1542963726,
        "question_id": 53443474,
        "link": "https://stackoverflow.com/questions/53443474/trace-301-redirect-rule-and-move-all-request-to-www-subdomain",
        "title": "Trace 301 Redirect Rule and move all request to www subdomain"
    },
    {
        "tags": [
            "iis",
            "url-rewriting",
            "url-rewrite-module",
            "iis-8.5"
        ],
        "owner": {
            "reputation": 2098,
            "user_id": 1506065,
            "user_type": "registered",
            "accept_rate": 86,
            "profile_image": "https://i.stack.imgur.com/kPcUB.jpg?s=128&g=1",
            "display_name": "prospector",
            "link": "https://stackoverflow.com/users/1506065/prospector"
        },
        "is_answered": true,
        "view_count": 844,
        "accepted_answer_id": 41152710,
        "answer_count": 1,
        "score": 1,
        "last_activity_date": 1542947452,
        "creation_date": 1481142307,
        "last_edit_date": 1481747610,
        "question_id": 41026717,
        "link": "https://stackoverflow.com/questions/41026717/redirect-and-remove-www-and-add-https",
        "title": "Redirect and remove www and add https"
    }
];

class Search extends Component {
    componentDidMount() {
        const { actions: { init } } = this.props;

        init();
    }

    componentWillUnmount() {
        const { actions: { reset } } = this.props;

        reset();
    }

    getRequestText = () => {
        const { location: { search } } = AppHistory;

        return getQueryParams('text', search);
    };

    render() {
        const {
            questionData,
            panelQuestionData,
            panelListParams,

            actions: {
                getListByValue,
                resetPanel,
            }
        } = this.props;

        return (
            <>
                <ul className="nav nav-pills">
                    <li role="presentation">
                        <Link to="/">Новый поиск</Link>
                    </li>
                </ul>
                <div className="row">
                    <div className="col-sm-12">
                        <h2>
                            {'Результаты '}
                            { this.getRequestText()
                                && (<>
                                    {'по запросу '}
                                    <span style={{ color: '#ccc' }}>"{this.getRequestText()}"</span>
                                    {':'}
                                </>)
                            }
                        </h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-8">
                        {questionData
                            && (
                                    <div>
                                        <QuestionList
                                            itemList={questionData}
                                            getListByValue={getListByValue}
                                        />
                                    </div>
                                )
                        }
                    </div>
                    <div className="col-sm-4">
                        {
                            panelQuestionData && panelQuestionData.length > 0
                            && panelListParams && panelListParams.typeList
                            && (
                                <PanelInfo
                                    itemList={panelQuestionData}
                                    listBy={panelListParams}
                                    resetPanel={resetPanel}
                                />
                            )
                        }
                    </div>
                </div>
            </>
        );
    }
}

Search.propTypes = {
    actions: {
        init: PropTypes.func,
        reset: PropTypes.func,
        getListByValue: PropTypes.func,
        resetPanel: PropTypes.func,
    },
    questionData: PropTypes.arrayOf(PropTypes.shape()),
    panelQuestionData: PropTypes.arrayOf(PropTypes.shape()),
    panelListParams: PropTypes.shape(),
};

const mapStateToProps = state => ({
    questionData: state.SearchReducer.questionData,
    panelQuestionData: state.SearchReducer.panelQuestionData,
    panelListParams: state.SearchReducer.panelListParams,
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
