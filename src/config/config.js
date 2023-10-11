export const config = {
    api: {
        lanyard: {
            discordUserId: "708965153131200594",
        },
        nonlnwzaPortfolio: {
            key: process.env.REACT_APP_PORTFOLIO_API_KEY,
        },
        github: {
            username: "imjustnon"
        }
    },
    data: {
        pages: {
            social: {
                defaultClass: "btn btn-ghost btn-outline mx-1 my-1 text-black",
                buttons: [
                    {
                        name: "Twitter",
                        url: "https://twitter.com/NoNnYhA55",
                        iconClass: "fa-brands fa-twitter",
                        hoverClass: "btn btn-active btn-info mx-1 my-1 text-white",
                    },
                    {
                        name: "Youtube",
                        url: "https://www.youtube.com/channel/UCCAlDdKswolIsOERlt0QWbw",
                        iconClass: "fa-brands fa-youtube",
                        hoverClass: "btn btn-active btn-error mx-1 my-1 text-white",
                    },
                    {
                        name: "Github",
                        url: "https://github.com/ImJustNon",
                        iconClass: "fa-brands fa-github",
                        hoverClass: "btn btn-active btn-neutral mx-1 my-1 text-white",
                    },
                    {
                        name: "Steam",
                        url: "https://steamcommunity.com/profiles/76561198980838273",
                        iconClass: "fa-brands fa-steam",
                        hoverClass: "btn btn-active btn-neutral mx-1 my-1 text-white",
                    },
                    {
                        name: "Twitch",
                        url: "https://www.twitch.tv/im_just_non",
                        iconClass: "fa-brands fa-twitch",
                        hoverClass: "btn btn-active btn-secondary mx-1 my-1 text-white",
                    },
                    {
                        name: "Email",
                        url: "mailto:Not.Non_006@outlook.sg",
                        iconClass: "fa-solid fa-at",
                        hoverClass: "btn btn-active btn-accent mx-1 my-1 text-white",
                    },
                    {
                        name: "Discord",
                        url: "https://discord.com/users/708965153131200594",
                        iconClass: "fa-brands fa-discord",
                        hoverClass: "btn btn-active btn-primary mx-1 my-1 text-white",
                    },
                    {
                        name: "Spotify",
                        url: "https://open.spotify.com/user/mvym46mna0nhjjvdt64l7m7uj",
                        iconClass: "fa-brands fa-spotify",
                        hoverClass: "btn btn-active btn-success mx-1 my-1 text-white",
                    },
                ],
                webPageButton: [
                    {
                        name: "Spotify",
                        url: "https://open.spotify.com/user/mvym46mna0nhjjvdt64l7m7uj",
                        iconClass: "fa-brands fa-spotify",
                        hoverClass: "btn btn-active btn-success mx-1 my-1 text-white",
                    },
                ]
            },
            project: {
                group: [
                    "m3",
                    "voc_cert_1",
                    "voc_cert_2"
                ],
            },
        }
    }
}