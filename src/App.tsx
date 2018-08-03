import * as React from 'react'
import ShadowBoxing from "shadowboxing"
import { Deck, Heading, Markdown, Slide } from "spectacle"
import createTheme from "spectacle/lib/themes/default"

import reactHiringTrends from "./reactHiringTrends.png"
import reactNpmDownloadsTrend from "./reactNpmDownloadsTrend.png"


class App extends React.Component {
    public render() {
        const DID = [
            "Lots of Python scripts",
            "Reverse Engineering",
            "Utility Web-Apps",
            "Web Scrapers",
        ]

        const LEARNED: Array<[string, string[]]> = [
            ["Docker", [
                "Docker CLI",
                "Using docker for development and deployment",
            ]],
            ["More about Git", [
                "Managing branches properly",
                "Handling merge requests",
            ]],
            ["More about Python", [
                "Asynchronous Python",
                "Testing in Python",
            ]],
            ["React", [
                "Building web pages with React",
                "Creating single page applications",
            ]],
        ]

        const takeawayReact = [
            "In my opinion, of the three most popular front-end javascript frameworks, React is the best",
            "Most popular in terms of both developer and hiring market-share",
            "Use typescript for all JS projects."
        ]

        const PROGRAMMING_TAKEAWAYS: Array<[string, string[]]> = [
            ["Docker", [
                "Learn Docker like your life depends on it!",
                "Removes a lot of the need for VMs",
                "Allows for seamless deployment from machine to machine",
                "Keeps functionality (and crashes) isolated"
            ]],
            ["Git", [
                "Learn Git like your life depends on it!",
                "Single most popular version control system",
                "Pivitol part of having a Github account."
            ]],
            ["Python", [
                "Learn Python like your life depends on it!",
                "Test your Python code! (pytest)",
                "Use virtualenv for your projects"
            ]],
            ["General Programming", [
                "Manage your dependencies, make your projects easy to pick up (add a readme)",
                "Know how to test code in your favorite language",
                "Use version control for your projects",
                "Get good at reading code",
            ]],
        ]

        const standAloneHeadingStyle: React.CSSProperties = {
            borderBottom: "solid #8b0000",
            borderRadius: "1rem",
            color: "white",
            paddingBottom: "1rem"
        }

        const infoHeadingColor = "black"
        const textColor = "white"

        const theme = createTheme(
            {
                primary: "red",
                secondary: infoHeadingColor
            },
            {
                primary: "Helvetica",
                secondary: { name: "Droid Serif", googleFont: true, styles: ["400", "700i"] }
            }
        );
        return (
            <Deck transition={["slide"]} theme={theme}>
                <Slide align="center center">
                    <ShadowBoxing level={8} style={{ border: "solid #8b0000", borderRadius: ".25rem" }}>
                        <Markdown>
                            {`# Interning @ Mantech\n### Riley Johnson`}
                        </Markdown>
                    </ShadowBoxing>
                </Slide>
                <Slide align="center center">
                    <div style={standAloneHeadingStyle}>
                        <Markdown>
                            {`# What Does Mantech Do?`}
                        </Markdown>
                    </div>
                </Slide>
                <Slide align="flex-start flex-start">
                    <div style={{ borderBottom: "solid #8b0000" }}>
                        <Heading fit={true} textColor={infoHeadingColor}>
                            What Does Mantech Do?
                        </Heading>
                    </div>
                    <div style={{ display: "grid", gridGap: "3rem 1rem", justifyItems: "stretch", gridTemplateColumns: "auto 1fr", marginTop: "1rem" }}>
                        <div style={{ color: textColor, fontSize: "3rem", fontWeight: "bold", justifySelf: "start" }}>
                            Officially:
                        </div>
                        <div>
                            <div style={{ backgroundColor: "#8b0000", borderRadius: ".25rem .25rem .25rem 0", color: textColor, fontSize: "2rem", padding: ".5rem" }}>
                                "When Federal managers and military leaders face tough challenges in cyber, data collection & analytics, enterprise IT or systems and software engineering, they turn to ManTech to get the job done right.​​​​"
                            </div>
                            <div style={{ display: "flex", justifyContent: "flex-start" }}>
                                <span style={{ backgroundColor: "#8b0000", borderRadius: "0 0 .25rem .25rem", color: textColor, fontSize: "2rem", padding: ".5rem" }}>
                                    - Mantech Website
                                </span>
                            </div>
                        </div>
                        <div style={{ color: textColor, fontSize: "3rem", fontWeight: "bold", justifySelf: "start" }}>
                            Unofficially:
                        </div>
                        <div>
                            <div style={{ backgroundColor: "#8b0000", borderRadius: ".25rem .25rem .25rem 0", color: textColor, fontSize: "2rem", padding: ".5rem" }}>
                                "Cyber stuff."
                            </div>
                            <div style={{ display: "flex", justifyContent: "flex-start" }}>
                                <span style={{ backgroundColor: "#8b0000", borderRadius: "0 0 .25rem .25rem", color: textColor, fontSize: "2rem", padding: ".5rem" }}>
                                    - Me
                                </span>
                            </div>
                        </div>
                    </div>
                </Slide>
                <Slide align="center center">
                    <div style={standAloneHeadingStyle}>
                        <Markdown>
                            {`# What Did I Do There?`}
                        </Markdown>
                    </div>
                </Slide>
                <Slide align="flex-start flex-start">
                    <div style={{ borderBottom: "solid #8b0000" }}>
                        <Heading fit={true} textColor={infoHeadingColor}>
                            What Did I Do There?
                        </Heading>
                    </div>
                    <div style={{ display: "grid", gridGap: "3rem 1rem", justifyItems: "stretch", gridTemplateColumns: "auto 1fr", marginTop: "1rem" }}>
                        <div style={{ color: textColor, fontSize: "3rem", fontWeight: "bold", justifySelf: "start" }}>
                            High Level Overview:
                        </div>
                        <div style={{ marginLeft: "3rem", textAlign: "left" }}>
                            {
                                DID.map(
                                    (text, index) => (
                                        <div key={index} style={{ color: textColor, fontSize: "2rem", padding: ".5rem" }}>
                                            - {text}
                                        </div>
                                    )
                                )
                            }
                        </div>
                        <div style={{ color: textColor, fontSize: "3rem", fontWeight: "bold", justifySelf: "start" }}>
                            Low Level Overview:
                        </div>
                        <div style={{ marginLeft: "3rem", textAlign: "left" }}>
                            <div style={{ color: textColor, fontSize: "2rem", padding: ".5rem" }}>
                                Can't talk about it :(
                            </div>
                        </div>
                    </div>
                </Slide>
                <Slide align="center center">
                    <div style={standAloneHeadingStyle}>
                        <Markdown>
                            {`# What Did I Learn?`}
                        </Markdown>
                    </div>
                </Slide>
                <Slide align="flex-start flex-start">
                    <div style={{ borderBottom: "solid #8b0000" }}>
                        <Heading fit={true} textColor={infoHeadingColor} >
                            What Did I Learn?
                        </Heading>
                    </div>
                    <div style={{ display: "grid", gridGap: "1.5rem 1rem", justifyItems: "stretch", gridTemplateColumns: "auto 1fr", marginTop: "1rem" }}>
                        {
                            LEARNED.map(
                                (learned) => (
                                    <React.Fragment>
                                        <div style={{ color: textColor, fontSize: "3rem", fontWeight: "bold", justifySelf: "start" }}>
                                            {learned[0]}
                                        </div>
                                        <div style={{ marginLeft: "3rem", textAlign: "left" }}>
                                            {
                                                learned[1].map(
                                                    (text, index) => (
                                                        <div key={index} style={{ color: textColor, fontSize: "1.6rem", padding: ".5rem" }}>
                                                            - {text}
                                                        </div>
                                                    )
                                                )
                                            }
                                        </div>
                                    </React.Fragment>
                                )
                            )
                        }
                    </div>
                </Slide>
                <Slide align="center center">
                    <div style={standAloneHeadingStyle}>
                        <Markdown>
                            {`# What Did I Take Away?`}
                        </Markdown>
                    </div>
                </Slide>
                <Slide align="flex-start flex-start">
                    <div style={{ height: "80vh" }}>
                        <div style={{ borderBottom: "solid #8b0000" }}>
                            <Heading fit={true} textColor={infoHeadingColor}>
                                What Did I Take Away: CSS
                        </Heading>
                        </div>
                        <div style={{ alignItems: "center", display: "grid", justifyItems: "center", gridTemplate: "1fr / 1fr", marginTop: "1rem", height: "100%" }}>
                            <div style={{ color: textColor, fontSize: "10vw" }}>
                                Learn Flexbox and Grid layout systems
                            </div>
                        </div>
                    </div>
                </Slide>
                <Slide align="flex-start flex-start">
                    <div style={{ borderBottom: "solid #8b0000" }}>
                        <Heading fit={true} textColor={infoHeadingColor} >
                            What Did I Learn: React
                        </Heading>
                    </div>
                    <div style={{ marginTop: "3rem", textAlign: "left" }}>
                        {
                            takeawayReact.map(
                                (text, innerIndex) => (
                                    <div key={innerIndex} style={{ color: textColor, fontSize: "1.6rem", padding: ".5rem" }}>
                                        - {text}
                                    </div>
                                )
                            )
                        }
                        <div style={{ display: "grid", gridGap: ".1rem", gridTemplate: "1fr / 1fr 1fr", marginTop: "7rem" }}>
                            <img src={reactHiringTrends} style={{ height: "auto", width: "100%" }} />
                            <img src={reactNpmDownloadsTrend} style={{ height: "auto", width: "100%" }} />
                        </div>
                    </div>
                </Slide>
                {
                    PROGRAMMING_TAKEAWAYS.map(
                        (takeaway, index) => (
                            <Slide align="flex-start flex-start" key={index}>
                                <div style={{ borderBottom: "solid #8b0000" }}>
                                    <Heading fit={true} textColor={infoHeadingColor} >
                                        What Did I Learn: {takeaway[0]}
                                    </Heading>
                                </div>
                                <div style={{ marginTop: "3rem", textAlign: "left" }}>
                                    {
                                        takeaway[1].map(
                                            (text, innerIndex) => (
                                                <div key={innerIndex} style={{ color: textColor, fontSize: "1.6rem", padding: ".5rem" }}>
                                                    - {text}
                                                </div>
                                            )
                                        )
                                    }
                                </div>
                            </Slide>
                        )
                    )
                }
            </Deck>
        );
    }
}

export default App;