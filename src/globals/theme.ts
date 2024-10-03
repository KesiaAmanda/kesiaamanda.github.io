import lightThemeBackgroundImage from '../assets/background/kime-nanami-pastelsky.gif'
import darkThemeBackgroundImage from '../assets/background/kime-nanami-pastelsky-nigth.gif'

import playerLightTheme from '../assets/images/1456855014belton-5.webp'
import playerDarkTheme from '../assets/images/bvn01m71yxxc1.gif'

import startIcon from '../assets/icons/social/icons8-pixel-star-16.png'
// import startIcon from '../assets/icons/desktop/start.png'
import welcomeIcon from '../assets/icons/desktop/contact_book.png'
import aboutMeIcon from '../assets/icons/desktop/text_file.png'
import trainingIcon from '../assets/icons/desktop/script_file.png'
import creditsIcon from '../assets/icons/desktop/text_file_2.png'
import musicPlayerIcon from '../assets/icons/desktop/music.png'
import skillsIcon from '../assets/icons/desktop/folder_open.png'
import paintIcon from '../assets/icons/desktop/paint.png'
import minecraftIcon from '../assets/icons/desktop/minecraft.png'
import prairieKingIcon from '../assets/icons/desktop/stardew_valley.png'
import computerIcon from '../assets/icons/desktop/this_computer.png'
import diskIcon from '../assets/icons/desktop/drive.png'
import folderOpenIcon from '../assets/icons/desktop/folder_open.png'
import folderClosedIcon from '../assets/icons/desktop/folder_closed.png'
import lightIcon from '../assets/icons/desktop/this_computer-day.png'
import darkIcon from '../assets/icons/desktop/this_computer-night.png'
import workspaceIcon from '../assets/icons/desktop/workspace.png'

import audioIcon from '../assets/icons/player/iconmonstr-audio.svg'
import minusIcon from '../assets/icons/window/iconmonstr-minus.svg'
import plusIcon from '../assets/icons/window/iconmonstr-plus.svg'
import playIcon from '../assets/icons/player/iconmonstr-play.svg';
import pauseIcon from '../assets/icons/player/iconmonstr-pause.svg';
import stopIcon from '../assets/icons/player/iconmonstr-stop.svg';
import previousIcon from '../assets/icons/player/iconmonstr-media-previous.svg';
import nextIcon from '../assets/icons/player/iconmonstr-media-next.svg';
import volumeIcon from '../assets/icons/player/iconmonstr-audio.svg';
import minimizeIcon from '../assets/icons/window/minimize.svg'
import maximizeIcon from '../assets/icons/window/iconmonstr-maximize.svg'
import closeIcon from '../assets/icons/window/iconmonstr-x-close.svg'
import arrowIcon from '../assets/icons/window/iconmonstr-arrow.svg'

import javaIcon from '../assets/skills/java_pixel_logo_for_personal_portfolio_by_panfrieddupa_df9xsql-fullview.png'
import springIcon from '../assets/skills/springio-icon.png'
import goIcon from '../assets/skills/go-icon.png'
import pythonIcon from '../assets/skills/python-icon.png'
import reactIcon from '../assets/skills/react_logo.png'
import angularIcon from '../assets/skills/angular-icon.png'
import htmlIcon from '../assets/skills/html_pixel_logo_for_personal_portfolio_by_panfrieddupa_df9xsqb-fullview.png'
import javaScriptIcon from '../assets/skills/javascript_pixel_logo_for_personal_portfolio_by_panfrieddupa_df9xsqo-fullview.png'
import cssIcon from '../assets/skills/css_pixel_logo_for_personal_portfolio_by_panfrieddupa_df9xsrn-fullview.png'
import postgreSqlIcon from '../assets/skills/postgresql-icon.png'
import msSqlIcon from '../assets/skills/mssql-icon.png'
import firebaseIcon from '../assets/skills/firebase-icon.png'
import herokuIcon from '../assets/skills/heroku-icon.png'
import intellijIcon from '../assets/skills/intellij_pixel_logo_for_personal_portfolio_by_panfrieddupa_df9xsqj-fullview.png'
import vsCodeIcon from '../assets/skills/visual_studio_pixel_logo_for_personal_portfolio_by_panfrieddupa_df9xsr9-fullview.png'
import gitIcon from '../assets/skills/git-scm-icon.png'
import figmaIcon from '../assets/skills/figma-icon.png'
import windowsIcon from '../assets/skills/windows-icon.png'
import linuxIcon from '../assets/skills/linux-icon.png'
import jenkinsIcon from '../assets/skills/jenkins-icon.png'
import dockerIcon from '../assets/skills/docker-icon.gif'
import composeIcon from '../assets/skills/compose-icon.gif'

import avatarIcon from '../assets/images/download20230701162715-1.png'
import linkedinIcon from '../assets/icons/social/linkedin_pixel_logo_icon_181925.png'
import githubIcon from '../assets/icons/social/github.png'

import starImage from '../assets/images/star.png'
import loadingImage from '../assets/images/loading.gif'


const images = {
    icons: {
        desktop: {
            computer: computerIcon,
            disk: diskIcon,
            folderOpen: folderOpenIcon,
            folderClosed: folderClosedIcon,
            start: startIcon,
            welcome: welcomeIcon,
            aboutMe: aboutMeIcon,
            training: trainingIcon,
            credits: creditsIcon,
            musicPlayer: musicPlayerIcon,
            skills: skillsIcon,
            paint: paintIcon,
            minecraft: minecraftIcon,
            prairieKing: prairieKingIcon,
            workspace: workspaceIcon,
        },

        window: {
            arrow: arrowIcon,
            minimize: minimizeIcon,
            maximize: maximizeIcon,
            close: closeIcon,
        },

        folder: {
            java: javaIcon,
            spring: springIcon,
            go: goIcon,
            python: pythonIcon,
            react: reactIcon,
            angular: angularIcon,
            html: htmlIcon,
            javaScript: javaScriptIcon,
            css: cssIcon,
            postgreSql: postgreSqlIcon,
            msSql: msSqlIcon,
            firebase: firebaseIcon,
            heroku: herokuIcon,
            intellij: intellijIcon,
            vsCode: vsCodeIcon,
            git: gitIcon,
            figma: figmaIcon,
            windows: windowsIcon,
            linux: linuxIcon,
            jenkins: jenkinsIcon,
            docker: dockerIcon,
            compose: composeIcon,
        },

        player: {
            audio: audioIcon,
            minus: minusIcon,
            plus: plusIcon,
            play: playIcon,
            pause: pauseIcon,
            stop: stopIcon,
            previous: previousIcon,
            next: nextIcon,
            volume: volumeIcon,
        },

        social: {
            avatar: avatarIcon,
            linkedin: linkedinIcon,
            github: githubIcon,
        },

    },
    star: starImage,
    loading: loadingImage
}

export const lightTheme = {
    ...images,
    images: {
        icons: {
            desktop: {
                theme: lightIcon
            }
        },
        scroll: {
            vertical: {
                enabled: {
                    increment: "url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 25 25' transform='scale(1 -1)'><path style='fill: rgb(32, 5, 27);' d='M12 3l12 18h-24z'/></svg>\")",
                    decrement: "url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 25 25'><path style='fill: rgb(32, 5, 27);' d='M12 3l12 18h-24z'/></svg>\")",
                },
                disabled: {
                    increment: "url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 25 25' transform='scale(1 -1)'><path style='fill: grey;' d='M12 3l12 18h-24z'/></svg>\")",
                    decrement: "url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 25 25'><path style='fill: grey;' d='M12 3l12 18h-24z'/></svg>\")"
                }
            },
            horizontal: {
                enabled: {
                    increment: "url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 25 25'><path style='fill: rgb(32, 5, 27);' d='M25 12l-18 12v-24z'/></svg>\")",
                    decrement: "url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 25 25' transform='scale(-1 1)'><path style='fill: rgb(32, 5, 27);' d='M25 12l-18 12 v-24z'/></svg>\")",
                },
                disabled: {
                    increment: "url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 25 25'><path style='fill: grey;' d='M25 12l-18 12v-24z'/></svg>\")",
                    decrement: "url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 25 25' transform='scale(-1 1)'><path style='fill: grey;' d='M25 12l-18 12v-24z'/></svg>\")"
                }
            }
        },
    },
    text: {
        color: 'rgb(12, 5, 11)'
    },
    window: {
        background: {
            color: 'rgb(187, 180, 185)'
        },
        header: {
            background: {
                color: 'linear-gradient(to right, rgb(47, 32, 43, 0.2), rgb(109, 86, 103, 0.1))',
                focus: 'linear-gradient(to right, rgba(150, 62, 128, 0.7), rgba(209, 130, 189, 0.5))'
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
            },
            link: {
                color: {
                    default: 'rgba(78, 7, 63, 0.603)',
                    hover: 'rgba(150, 54, 129, 0.603)'
                }
            }
        },
        scroll: {
            background: 'rgb(209, 209, 209)',
        },
        console: {
            background: {
                color: '#0f0d0f'
            },
            text: {
                color: 'rgb(111, 172, 82)'
            }
        },
        player: {
            background: {
                image: playerLightTheme
            },
            frame: {
                shadow: {
                    slider: 'rgba(107, 107, 107, 0.5)',
                    black: 'rgba(107, 107, 107, 0.5)',
                    white: 'rgb(235, 235, 235)'
                }
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
    },
    start: {
        menu: {
            left: {
                color: 'rgb(151, 132, 151)'
            },
            button: {
                hover: {
                    color: '#9D568D',
                    text: {
                        color: 'white'
                    }
                }
            }
        }
    },
    paint: `url('../../images/classic/tools.png')`
}

export const darkTheme = {
    ...images,
    images: {
        icons: {
            desktop: {
                theme: darkIcon
            }
        },
        scroll: {
            vertical: {
                enabled: {
                    increment: "url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 25 25' transform='scale(1 -1)'><path style='fill: rgb(226, 213, 224);' d='M12 3l12 18h-24z'/></svg>\")",
                    decrement: "url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 25 25'><path style='fill: rgb(226, 213, 224);' d='M12 3l12 18h-24z'/></svg>\")",
                },
                disabled: {
                    increment: "url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 25 25' transform='scale(1 -1)'><path style='fill: grey;' d='M12 3l12 18h-24z'/></svg>\")",
                    decrement: "url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 25 25'><path style='fill: grey;' d='M12 3l12 18h-24z'/></svg>\")"
                }
            },
            horizontal: {
                enabled: {
                    increment: "url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 25 25'><path style='fill: rgb(226, 213, 224);' d='M25 12l-18 12v-24z'/></svg>\")",
                    decrement: "url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 25 25' transform='scale(-1 1)'><path style='fill: rgb(226, 213, 224);' d='M25 12l-18 12 v-24z'/></svg>\")",
                },
                disabled: {
                    increment: "url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 25 25'><path style='fill: grey;' d='M25 12l-18 12v-24z'/></svg>\")",
                    decrement: "url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 25 25' transform='scale(-1 1)'><path style='fill: grey;' d='M25 12l-18 12v-24z'/></svg>\")"
                }
            }
        },
    },
    text: {
        color: 'rgb(247, 242, 248)'
    },
    window: {
        background: {
            color: '#1B1A21'
        },
        header: {
            background: {
                color: 'linear-gradient(to right, rgb(151, 151, 151, 0.1), rgb(151, 151, 151, 0.1))',
                focus: 'linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2))',
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
            },
            link: {
                color: {
                    default: 'rgba(185, 112, 169, 0.603)',
                    hover: 'rgba(243, 68, 205, 0.603)'
                }
            }
        },
        scroll: {
            background: '#1D1C24',
        },
        console: {
            background: {
                color: '#0f0d0f'
            },
            text: {
                color: 'rgb(111, 172, 82)'
            }
        },
        player: {
            background: {
                image: playerDarkTheme
            },
            frame: {
                shadow: {
                    slider: 'black',
                    black: 'rgba(0, 0, 0, 0.692)',
                    white: 'rgba(102, 102, 102, 0.336)'
                }
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
    },
    paint: `url('../../images/dark/tools.png')`
}
