import lightThemeBackgroundImage from '../assets/background/kime-nanami-pastelsky.gif'
import darkThemeBackgroundImage from '../assets/background/kime-nanami-pastelsky-nigth.gif'

export const lightTheme = {
    text: {
        color: 'rgb(12, 5, 11)'
    },
    window: {
        background: 'rgb(187, 180, 185)'
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
    button: {
        frame: {
            dotted: {
                click: 'black'
            }
        }
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
        background: '#1B1A21'
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
    button: {
        frame: {
            dotted: {
                click: 'rgb(78, 78, 78)'
            }
        }
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
