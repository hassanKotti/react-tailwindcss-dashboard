const data =
    [
        {
            "category": "Dashboard",
            "menu": [
                {
                    "id": "1",
                    "label": "Dashboard",
                    "icon": "tabler:home",
                    "link": "/dashboard",
                    "sub": null
                }
            ]
        },
        {
            "category": "Pages",
            "menu": [
                {
                    "id": "4",
                    "label": "Authentication",
                    "icon": "tabler:shield-lock",
                    "link": "/dashboard/auth",
                    "sub": [
                        {
                            "label": "Login",
                            "icon": "tabler:login",
                            "link":"/dashboard/auth/login"
                        },
                        {
                            "label": "Register",
                            "icon": "tabler:edit-circle",
                            "link":"/dashboard/auth/register"
                        },
                        {
                            "label": "Reset Password",
                            "icon": "tabler:italic",
                            "link":"/dashboard/auth/rest-password"
                        }
                    ]
                },

                {
                    "id": "6",
                    "label": "Error Pages",
                    "icon": "tabler:alert-triangle",
                    "link": "/dashboard/error-pages/",
                    "sub": [
                        {
                            "id": "601",
                            "label": "NotFound",
                            "icon": "tabler:alert-triangle",
                            "link": "/dashboard/error-pages/404",
                            "sub": null
                        },
                        {
                            "id": "602",
                            "label": "Error500",
                            "icon": "tabler:alert-octagon",
                            "link": "/dashboard/error-pages/",
                            "sub": null
                        },
                    ]
                },
                {
                    "id": "8",
                    "label": "SignUp",
                    "icon": "tabler:edit-circle",
                    "link": "/dashboard/error-pages/500",
                    "sub": null
                },
            ]
        },
        {
            "category": "UI",
            "menu": [{
                "id": "9",
                "label": "Components",
                "icon": "tabler:square-rotated",
                "link": "500",
                "sub": [
                    {
                        "id": "901",
                        "label": "Buttons",
                        "icon": "tabler:alert-triangle",
                        "link": "/dashboard/component/buttons",
                        "sub": null
                    },
                    {
                        "id": "902",
                        "label": "Spinner",
                        "icon": "tabler:alert-octagon",
                        "link": "/dashboard/component/spinner",
                        "sub": null
                    },
                ]
            }],
        },
        {
            "category": "Extra",
            "menu": [
                {
                    "id": "2",
                    "label": "Colors",
                    "icon": "tabler:color-swatch",
                    "link": "/dashboard/extra/colors",
                    "sub": null
                },
                {
                    "id": "3",
                    "label": "Tables",
                    "icon": "tabler:table",
                    "link": "/dashboard/extra/tables",
                    "sub": null
                },
                {
                    "id": "5",
                    "label": "Settings",
                    "icon": "tabler:settings",
                    "link": "/dashboard/extra/settings",
                    "sub": null
                },
            ]
        }
    ];

export default data