import lightThemeBackgroundImage from '../assets/background/kime-nanami-pastelsky.gif'
import darkThemeBackgroundImage from '../assets/background/kime-nanami-pastelsky-nigth.gif'
// import darkThemeBackgroundImage from '../assets/background/noite.gif'

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
        color: 'rgb(12, 5, 11)'
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
        color: 'rgb(247, 242, 248)'
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
