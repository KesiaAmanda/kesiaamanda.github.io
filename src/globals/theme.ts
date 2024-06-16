import lightThemeBackgroundImage from '../assets/background/kime-nanami-pastelsky.gif'
import darkThemeBackgroundImage from '../assets/background/kime-nanami-pastelsky-nigth.gif'

import welcomeIcon from '../assets/icons/desktop/program.png'
import aboutMeIcon from '../assets/icons/desktop/text_file.png'
import trainingIcon from '../assets/icons/desktop/console.png'
import creditsIcon from '../assets/icons/desktop/text_file_2.png'
import musicPlayerIcon from '../assets/icons/desktop/music.png'
import skillsIcon from '../assets/icons/desktop/folder_open.png'

export const lightTheme = {
    text: {
        color: 'rgb(12, 5, 11)'
    },
    window: {
        background: {
            color: 'rgb(187, 180, 185)'
        },
        header: {
            background: {
                color: 'linear-gradient(to right, rgba(150, 62, 128, 0.7), rgba(209, 130, 189, 0.5))'
            },
            title: {
                color: 'rgb(255, 251, 245)'
            }
        },
        body: {
            background: {
                color: 'rgb(230, 230, 230)'
            },
            hr: {
                color: 'rgb(12, 5, 11)'
            }
        },
        scroll: {
            background: 'rgb(209, 209, 209)',
            vertical: {
                increment: "url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 25 25' transform='scale(1 -1)'><path style='fill: rgb(32, 5, 27);' d='M12 3l12 18h-24z'/></svg>\")",
                decrement: "url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 25 25'><path style='fill: rgb(32, 5, 27);' d='M12 3l12 18h-24z'/></svg>\")",
                disabled: {
                    increment: "url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 25 25' transform='scale(1 -1)'><path style='fill: grey;' d='M12 3l12 18h-24z'/></svg>\")",
                    decrement: "url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 25 25'><path style='fill: grey;' d='M12 3l12 18h-24z'/></svg>\")"
                }
            },
            horizontal: {
                increment: "url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 25 25'><path style='fill: rgb(32, 5, 27);' d='M25 12l-18 12v-24z'/></svg>\")",
                decrement: "url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 25 25' transform='scale(-1 1)'><path style='fill: rgb(32, 5, 27);' d='M25 12l-18 12 v-24z'/></svg>\")",
                disabled: {
                    increment: "url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 25 25'><path style='fill: grey;' d='M25 12l-18 12v-24z'/></svg>\")",
                    decrement: "url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 25 25' transform='scale(-1 1)'><path style='fill: grey;' d='M25 12l-18 12v-24z'/></svg>\")"
                }
            }
        },
        console: {
            background: {
                color: '#0f0d0f'
            },
            text: {
                color: 'rgb(111, 172, 82)'
            }
        }
    },
    frame: {
        border: {
            style: 'ridge'
        },
        shadow: {
            white: 'rgb(235, 235, 235)',
            black: 'rgb(175, 175, 175)'
        }
    },
    desktop: {
        title: {
            icon: {
                shadow: 'black',
                color: 'white'
            }
        }
    },
    background: {
        image: lightThemeBackgroundImage,

    },
    body: {
        background: {
            color: 'rgb(230, 230, 230)'
        }
    },
    button: {
        frame: {
            dotted: {
                click: 'black'
            }
        }
    },
    icon: {
        color: 'rgb(12, 5, 11)',
        welcome: welcomeIcon,
        aboutMe: aboutMeIcon,
        training: trainingIcon,
        credits: creditsIcon,
        musicPlayer: musicPlayerIcon,
        skills: skillsIcon
    },
    start: {
        menu: {
            left: {
                color: 'rgb(151, 132, 151)'
            },
            button: {
                hover: {
                    color: 'rgb(136, 24, 112, 0.6)',
                    text: {
                        color: 'white'
                    }
                }
            }
        }
    }
}

export const darkTheme = {
    text: {
        color: 'rgb(247, 242, 248)'
    },
    window: {
        background: {
            color: '#1B1A21'
        },
        header: {
            background: {
                color: 'linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2))'
            },
            title: {
                color: 'rgb(226, 213, 224)'
            }
        },
        body: {
            background: {
                color: '#23222B'
            },
            hr: {
                color: 'rgb(247, 242, 248)'
            }
        },
        scroll: {
            background: '#1D1C24',
            vertical: {
                increment: "url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 25 25' transform='scale(1 -1)'><path style='fill: rgb(226, 213, 224);' d='M12 3l12 18h-24z'/></svg>\")",
                decrement: "url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 25 25'><path style='fill: rgb(226, 213, 224);' d='M12 3l12 18h-24z'/></svg>\")",
                disabled: {
                    increment: "url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 25 25' transform='scale(1 -1)'><path style='fill: rgb(56, 56, 56);' d='M12 3l12 18h-24z'/></svg>\")",
                    decrement: "url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 25 25'><path style='fill: rgb(56, 56, 56);' d='M12 3l12 18h-24z'/></svg>\")"
                }
            },
            horizontal: {
                increment: "url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 25 25'><path style='fill: rgb(226, 213, 224);' d='M25 12l-18 12v-24z'/></svg>\")",
                decrement: "url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 25 25' transform='scale(-1 1)'><path style='fill: rgb(226, 213, 224);' d='M25 12l-18 12v-24z'/></svg>\")",
                disabled: {
                    increment: "url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 25 25'><path style='fill: rgb(56, 56, 56);' d='M25 12l-18 12v-24z'/></svg>\")",
                    decrement: "url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 25 25' transform='scale(-1 1)'><path style='fill: rgb(56, 56, 56);' d='M25 12l-18 12v-24z'/></svg>\")"
                }
            }
        },
        console: {
            background: {
                color: '#0f0d0f'
            },
            text: {
                color: 'rgb(111, 172, 82)'
            }
        }
    },
    frame: {
        border: {
            style: 'solid'
        },
        shadow: {
            white: 'rgba(102, 102, 102, 0.336)',
            black: 'rgba(0, 0, 0, 0.692)'
        }
    },
    desktop: {
        title: {
            icon: {
                // shadow: 'white',
                // color: 'black'
                shadow: 'black',
                color: 'white'
            }
        }
    },
    background: {
        image: darkThemeBackgroundImage,

    },
    body: {
        background: {
            color: '#23222B'
        }
    },
    button: {
        frame: {
            dotted: {
                click: 'rgb(78, 78, 78)'
            }
        }
    },
    icon: {
        color: 'rgb(247, 242, 248)',
        welcome: welcomeIcon,
        aboutMe: aboutMeIcon,
        training: trainingIcon,
        credits: creditsIcon,
        musicPlayer: musicPlayerIcon,
        skills: skillsIcon
    },
    start: {
        menu: {
            left: {
                color: '#131314'
            },
            button: {
                hover: {
                    color: '#381639ab',
                    text: {
                        color: 'rgb(226, 213, 224)'
                    }
                }
            }
        }
    }
}
