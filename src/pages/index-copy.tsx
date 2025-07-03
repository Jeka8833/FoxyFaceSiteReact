import React, {ReactNode, useState} from 'react';

import 'bootstrap-icons/font/bootstrap-icons.css';
import {
    Accordion,
    Alert,
    Badge,
    Button,
    Card,
    Col,
    Container,
    Image,
    ListGroup,
    Modal,
    Nav,
    Row
} from 'react-bootstrap';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

import Head from "@docusaurus/Head";
import useBaseUrl from "@docusaurus/useBaseUrl";
import NavbarColorModeToggle from "@theme/Navbar/ColorModeToggle";
import {registerListener} from "../util/DocusaurusBootstrapThemeSync";

export default function Home(): ReactNode {
    const {siteConfig} = useDocusaurusContext();
    const imageUrl = (path) => useBaseUrl(path);

    registerListener();

    const [showImageInfoModal, setShowImageInfoModal] = useState(false);
    const [showVRChatSetupModal, setShowVRChatSetupModal] = useState(false);

    return (
        <Layout
            title={`${siteConfig.title} | Face Tracking Application for VRChat`}
            description="The free FoxyFace app lets you control your avatar's face in VRChat using any webcam or camera, whether it's connected to your computer or on your phone."
            noFooter={true}
        >
            <Head>
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "SoftwareApplication",
                        "name": "FoxyFace | Face Tracking Application for VRChat",
                        "description": "The free FoxyFace app lets you control your avatar's face in VRChat using any webcam or camera, whether it's connected to your computer or on your phone.",
                        "applicationCategory": "UtilitiesApplication",
                        "operatingSystem": "Windows, macOS, Linux",
                        "softwareRequirements": [
                            "VRCFaceTracking",
                            "VRChat"
                        ],
                        "offers": {
                            "@type": "Offer",
                            "price": "0",
                            "priceCurrency": "USD"
                        },
                        "url": "https://foxyface.jeka8833.pp.ua/",
                        "image": "https://foxyface.jeka8833.pp.ua/images/favicon-144x144.png",
                        "downloadUrl": "https://github.com/Jeka8833/FoxyFace/wiki/Install-FoxyFace",
                        "screenshot": "https://foxyface.jeka8833.pp.ua/images/mainPage/background.jpg",
                        "publisher": {
                            "@type": "Person",
                            "name": "Jeka8833",
                            "url": "https://github.com/Jeka8833"
                        }
                    })}
                </script>

                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/css/bootstrap.min.css"/>
            </Head>

            <div style={{background: 'rgba(0, 0, 0, 1)'}}>
                <Image alt="Background" className="position-absolute object-fit-cover opacity-75 w-100 vh-100 z-2"
                       loading="lazy" src={imageUrl('images/mainPage/background.jpg')} fluid/>

                <div className="position-absolute d-flex align-items-end justify-content-end w-100 vh-100 z-3">
                    <Button variant="link" onClick={() => setShowImageInfoModal(true)}>
                        Image info
                    </Button>
                </div>

                <Container className="position-relative d-flex mx-auto flex-column text-center vh-100 z-3">
                    <header className="mb-auto">
                        <div className="float-md-start mb-0 pt-3">
                            <a className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover fw-bold py-1 px-2"
                               href="/docs/FoxyFace/install-update-uninstall/install/Install-FoxyFace">
                                Documentation
                            </a>
                            <a className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover fw-bold py-1 px-2"
                               href="https://github.com/Jeka8833/FoxyFace" rel="noopener noreferrer nofollow"
                               target="_blank">
                                GitHub
                            </a>
                        </div>
                        <Nav className="justify-content-center float-md-end pt-3">
                            <NavbarColorModeToggle className={styles.colorModeToggle}/>
                        </Nav>
                    </header>
                    <div className="mx-auto text-light" style={{maxWidth: '21em'}}>
                        <h1>FoxyFace</h1>
                        <p className="h5">An application that allows you to control your avatar's face in VRChat using
                            your real face.</p>
                        <Button variant="light" size="lg" className="fw-bold border-white bg-white mt-4"
                                href="#install">
                            Install
                        </Button>
                    </div>
                    <div className="mt-auto"></div>
                </Container>
            </div>

            <Container as="main">
                <div className="py-5" id="install">
                    <h2 className="text-center">Installation</h2>
                    <hr/>
                    <Row xs={1} md={2} lg={3} className="g-4 pt-5 text-center">
                        <Col>
                            <Card className="h-100 border shadow-lg border-success">
                                <Card.Body>
                                    <Card.Title as="h3">Install FoxyFace App</Card.Title>
                                    <Card.Subtitle className="mb-2 text-body-secondary">
                                        <Badge bg="primary" className="m-1">Step 1</Badge>
                                    </Card.Subtitle>
                                    <hr/>
                                    <Card.Text>The main app that tracks your face.</Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <Button as="a" href="https://github.com/Jeka8833/FoxyFace/wiki/Install-FoxyFace"
                                            rel="noopener noreferrer nofollow" target="_blank">See guide</Button>
                                </Card.Footer>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="h-100 border shadow-lg">
                                <Card.Body>
                                    <Card.Title as="h3">Install VRCFaceTracking App</Card.Title>
                                    <Card.Subtitle className="mb-2 text-body-secondary">
                                        <Badge bg="primary" className="m-1">Step 2</Badge>
                                    </Card.Subtitle>
                                    <hr/>
                                    <Card.Text>This application sends avatar control commands to VRChat.</Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <Button as="a" href="https://store.steampowered.com/app/3329480/VRCFaceTracking/"
                                            rel="noopener noreferrer nofollow" target="_blank">Download</Button>
                                </Card.Footer>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="h-100 border shadow-lg border-success">
                                <Card.Body>
                                    <Card.Title as="h3">Install VRCFT Module</Card.Title>
                                    <Card.Subtitle className="mb-2 text-body-secondary">
                                        <Badge bg="primary" className="m-1">Step 3</Badge>
                                    </Card.Subtitle>
                                    <hr/>
                                    <Card.Text>Install the FoxyFaceVRCFTInterface module, it connects the FoxyFace and
                                        VRCFaceTracking applications.</Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <Button as="a"
                                            href="https://github.com/Jeka8833/FoxyFace/wiki/Install-Module-from-Module-Registry"
                                            rel="noopener noreferrer nofollow" target="_blank">See guide</Button>
                                </Card.Footer>
                            </Card>
                        </Col>
                    </Row>
                </div>

                <div className="py-5" id="after-installation">
                    <h2 className="text-center">After Installation</h2>
                    <hr/>
                    <Row xs={1} md={2} lg={3} className="g-4 pt-5 text-center">
                        <Col>
                            <Card className="h-100 border shadow-lg">
                                <Card.Body>
                                    <Card.Title as="h3">Camera Setup</Card.Title>
                                    <Card.Subtitle className="mb-2 text-body-secondary">
                                        <Badge bg="primary" className="m-1">Step 1</Badge>
                                        <Badge bg="primary" className="m-1">Depends on the situation</Badge>
                                    </Card.Subtitle>
                                    <hr/>
                                    <Card.Text>If you don't have a camera connected to the computer where FoxyFace
                                        installed, you will have to use your phone/other computer as a
                                        camera.</Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <Button as="a"
                                            href="https://github.com/Jeka8833/FoxyFace/wiki/Using-another-device-as-a-camera"
                                            rel="noopener noreferrer nofollow" target="_blank">See guide</Button>
                                </Card.Footer>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="h-100 border shadow-lg">
                                <Card.Body>
                                    <Card.Title as="h3">VRChat Setup</Card.Title>
                                    <Card.Subtitle className="mb-2 text-body-secondary">
                                        <Badge bg="primary" className="m-1">Step 2</Badge>
                                        <Badge bg="danger" className="m-1">Important</Badge>
                                    </Card.Subtitle>
                                    <hr/>
                                    <Card.Text>You need to enable face tracking in the VRChat settings, everything is
                                        turned off by default.</Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <Button onClick={() => setShowVRChatSetupModal(true)}>See guide</Button>
                                </Card.Footer>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="h-100 border shadow-lg">
                                <Card.Body>
                                    <Card.Title as="h3">Update Babble NN</Card.Title>
                                    <Card.Subtitle className="mb-2 text-body-secondary">
                                        <Badge bg="primary" className="m-1">Step 3</Badge>
                                        <Badge bg="danger" className="m-1">Important</Badge>
                                    </Card.Subtitle>
                                    <hr/>
                                    <Card.Text>To better track your cheeks and tongue, you need to update the neural
                                        network from Project Babble.</Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <Button as="a"
                                            href="https://github.com/Jeka8833/FoxyFace/wiki/Update-Babble-Model"
                                            rel="noopener noreferrer nofollow" target="_blank">See guide</Button>
                                </Card.Footer>
                            </Card>
                        </Col>
                    </Row>
                </div>

                <div className="py-5" id="faq">
                    <h2 className="text-center">FAQ</h2>
                    <hr/>
                    <Accordion className="shadow-lg">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>
                                The quality of tracking of some parameters is not very good
                            </Accordion.Header>
                            <Accordion.Body>
                                The parameters of the tongue, cheeks or jaw may not track well. The solution to this
                                may be:
                                <ol>
                                    <li><a href="https://github.com/Jeka8833/FoxyFace/wiki/Update-Babble-Model"
                                           rel="noopener noreferrer nofollow" target="_blank">Update the neural network
                                        from Project Babble.</a></li>
                                    <li><a href="https://github.com/Jeka8833/FoxyFace/wiki/Auto-Calibration"
                                           rel="noopener noreferrer nofollow" target="_blank">Perform Auto
                                        Calibration.</a></li>
                                    <li><a href="https://github.com/Jeka8833/FoxyFace/wiki/Camera-Settings"
                                           rel="noopener noreferrer nofollow" target="_blank">Adjust camera settings and
                                        tweak the environment (lighting, background, position, etc.).</a></li>
                                </ol>
                                <p>The main reason is the imperfection of neural networks. If you know other neural
                                    networks that can process images in real-time, please inform Jeka8833.</p>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>
                                Can FoxyFace work with Selfie Expression?
                            </Accordion.Header>
                            <Accordion.Body>
                                <Alert variant="info">
                                    <Alert.Heading as="h4">NOTE</Alert.Heading>
                                    <p>The main problem is that one camera can be used by only one application (the
                                        camera in most cases cannot split the video stream between two applications).
                                        These instructions will help you split a video stream into two
                                        applications.</p>
                                    <p>The author does not have a VRC+ so the instructions may contain mistakes or
                                        inaccuracies.</p>
                                </Alert>
                                Here's a rough guide on how to get FoxyFace and Selfie Expression working
                                simultaneously:
                                <ol>
                                    <li><a href="https://obsproject.com/" rel="noopener noreferrer nofollow"
                                           target="_blank">Install OBS application</a>. Video instructions can be found
                                        <a href="https://www.youtube.com/watch?v=QGxdTGhhJyI"
                                           rel="noopener noreferrer nofollow" target="_blank">here</a>, but you don't
                                        need to create any scenes, just install the app.
                                    </li>
                                    <li>Close VRChat and FoxyFace applications.</li>
                                    <li>Add a camera to the OBS scene. Video instructions can be found <a
                                        href="https://www.youtube.com/watch?v=vLN29GPp4Ig"
                                        rel="noopener noreferrer nofollow" target="_blank">here</a>.
                                    </li>
                                    <li>Click on the Start Virtual Camera button, <a
                                        href="https://obsproject.com/kb/virtual-camera-guide"
                                        rel="noopener noreferrer nofollow" target="_blank">here</a> are instructions on
                                        how to do it.
                                    </li>
                                    <li>Run VRChat and select the OBS camera in VRChat.</li>
                                    <li>Run FoxyFace and change <a
                                        href="https://github.com/Jeka8833/FoxyFace/wiki/Camera-Settings#camera-id"
                                        rel="noopener noreferrer nofollow" target="_blank">Camera ID</a> in
                                        FoxyFace.
                                    </li>
                                </ol>
                                <p>You can find more detailed instructions <a
                                    href="https://github.com/Jeka8833/FoxyFace/wiki/Head-Rotation"
                                    rel="noopener noreferrer nofollow" target="_blank">here</a>.</p>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>
                                Avatar head rotation doesn't work
                            </Accordion.Header>
                            <Accordion.Body>
                                Instructions on how to track head rotation can be found <a
                                href="https://github.com/Jeka8833/FoxyFace/wiki/Head-Rotation"
                                rel="noopener noreferrer nofollow" target="_blank">here</a>. But the instructions may be
                                too complicated for beginners if you don't want to spend money on <a
                                href="https://wiki.vrchat.com/wiki/VRC%2B" rel="noopener noreferrer nofollow"
                                target="_blank">VRC+</a>.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>

                <div className="py-5 text-center" id="contact">
                    <h2 className="text-center">Contact</h2>
                    <hr/>
                    <Row className="row-cols-1 row-cols-md-2 g-4 pt-5">
                        <Col className="mx-auto" style={{maxWidth: '400px'}}>
                            <Card className="h-100 border-0">
                                <Image
                                    alt="Jeka8833 Avatar"
                                    className="mx-auto"
                                    loading="lazy"
                                    src={imageUrl('images/mainPage/Jeka8833-avatar.jpg')}
                                    style={{maxWidth: '150px', aspectRatio: '1 / 1'}}
                                    roundedCircle
                                />
                                <Card.Body>
                                    <Card.Title as="h3">Jeka8833</Card.Title>
                                    <hr/>
                                    <Card.Text as="div">
                                        <p>Founder of FoxyFace, if you have any questions, feel free to ask them in the
                                            FoxyFace repository or to me in Discord.</p>
                                        <div className="mt-auto">
                                            <ListGroup variant="flush">
                                                <ListGroup.Item>
                                                    <a className="text-decoration-none"
                                                       href="https://github.com/Jeka8833"
                                                       rel="noopener noreferrer nofollow" target="_blank">
                                                        <i className="bi bi-github"></i> Jeka8833
                                                    </a>
                                                </ListGroup.Item>
                                                <ListGroup.Item>
                                                    <a className="text-decoration-none" href="#">
                                                        <i className="bi bi-discord"></i> Jeka8833
                                                    </a>
                                                </ListGroup.Item>
                                                <ListGroup.Item>
                                                    <a className="text-decoration-none"
                                                       href="mailto:mail@foxyface@jeka8833.pp.ua">
                                                        <i className="bi bi-envelope-fill"></i> foxyface@jeka8833.pp.ua
                                                    </a>
                                                </ListGroup.Item>
                                            </ListGroup>
                                        </div>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </Container>

            <Container as="footer" fluid="xxl" className="flex-grow-0 flex-shrink-1 border-top">
                <div className="py-1 m-1 d-flex align-items-center flex-column flex-sm-row justify-content-between">
                    <p className="m-0">Created by: Jeka8833, 2025 year</p>
                    <a aria-label="Jeka8833's GitHub profile page" className="link-secondary fs-4"
                       href="https://github.com/Jeka8833" rel="noopener noreferrer nofollow" target="_blank">
                        <i className="bi bi-github"></i>
                    </a>
                </div>
            </Container>

            <Modal show={showImageInfoModal} onHide={() => setShowImageInfoModal(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Image Info</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ul>
                        <li>Map: <a
                            href="https://vrchat.com/home/world/wrld_cf2e8fe9-5979-4ad9-8c0e-d7fe22e09073/info"
                            rel="noopener noreferrer nofollow" target="_blank">Far beyond the horizon</a></li>
                        <li>Avatar: <a href="https://omatssu.gumroad.com/l/amriot"
                                       rel="noopener noreferrer nofollow" target="_blank">Amriot</a></li>
                        <li>Avatar modules:
                            <ul>
                                <li><a href="https://adjerry91.github.io/VRCFaceTracking-Templates"
                                       rel="noopener noreferrer nofollow" target="_blank">VRCFT - Jerry's
                                    Templates</a> - Allows you to control the "muscles" on the avatar's face.
                                </li>
                                <li><a href="https://github.com/kusomaigo/DeskyMode"
                                       rel="noopener noreferrer nofollow" target="_blank">DeskyMode</a> - Allows
                                    you to control the rotation of the avatar's head.
                                </li>
                            </ul>
                        </li>
                    </ul>
                </Modal.Body>
            </Modal>

            <Modal show={showVRChatSetupModal} onHide={() => setShowVRChatSetupModal(false)} centered scrollable>
                <Modal.Header closeButton>
                    <Modal.Title>VRChat Setup Info</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ol>
                        <li>
                            Enable OSC. A video of how to do this can be found <a
                            href="https://www.youtube.com/watch?v=byXLmE9vVDs"
                            rel="noopener noreferrer nofollow" target="_blank">here</a>.
                            <div className="d-flex justify-content-center pt-2 pb-4">
                                <Image alt="How to enable OSC" className="w-50" loading="lazy"
                                       src={imageUrl('images/guide/OSC.png')} fluid/>
                            </div>
                        </li>
                        <li>
                            Enable the individual parts of the face tracking on the avatar. Unfortunately, all
                            avatars are unique, but roughly it will look like this:
                            <div className="d-flex justify-content-center pt-2 pb-4">
                                <Image alt="Where VRCFT Options" className="w-50" loading="lazy"
                                       src={imageUrl('images/guide/VrcftOptions.png')} fluid/>
                            </div>
                        </li>
                    </ol>
                </Modal.Body>
            </Modal>
        </Layout>
    );
}