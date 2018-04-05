![Logo](logo.png)
# NEScat

[![Go 1.7.5](https://img.shields.io/badge/Go-1.7.5-brightgreen.svg)](https://golang.org/doc/devel/release.html) [![Gin 1.1.4](https://img.shields.io/badge/Gin-1.1.4-brightgreen.svg)](https://golang.org/doc/devel/release.html) [![Go Report Card](https://goreportcard.com/badge/github.com/g-g-g/nescat)](https://goreportcard.com/report/github.com/g-g-g/nescat)

NEScat is a website to play NES or Nintendo Entertainment System games in a browser in singleplayer and online multiplayer modes with only JavaScript, no plugins necessary. It is based on [melody-jsnes by olahal](https://github.com/olahol/melody-jsnes) and [jsnes by bfirsh](https://github.com/bfirsh/jsnes). The server side components were programmed in Go with Gin handling the web aspects and Melody using websockets to allow multiplayer.

![Screenshot 1](screenshot1.png)
![Screenshot 2](screenshot2.png)
