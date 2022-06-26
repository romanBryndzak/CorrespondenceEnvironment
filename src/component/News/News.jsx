import TabBar from "./tabBar/TabBar";
import TabBarItem from "./tabBar/TabBarItem";
import React, {useState} from "react";
import Image from "./image/Image";
import ButtonGroup from "./buttonGroup/ButtonGroup";
import Button from "./button/Button";

function News() {
    const [active, setActive] = useState('');
    const [active1, setActive1] = useState('');

    const onClick = (e) => {
        setActive(e.target.textContent);
    };
    const onClick1 = (e) => {
        setActive1(e.target.textContent)
    }

    return (
        <div>
            <TabBar>
                <TabBarItem label='tab1'>Content</TabBarItem>
                <TabBarItem label='tab2'>Content</TabBarItem>
                <TabBarItem label='tab3'>Content</TabBarItem>
            </TabBar>

            <h2><span>1. Horizontal tabBar:</span></h2>
            <TabBar>
                <TabBarItem label="Simple text">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book. It has survived not only five.</p>
                </TabBarItem>
                <TabBarItem label="Image">
                    <Image
                        src="https://accentsconagua.com/img/images_2/easier-react-native-development-with-expo.jpg"
                        width={150}
                        height={150}
                    />
                </TabBarItem>
                <TabBarItem label="Component">
                    <ButtonGroup>
                        <Button active={'First' === active} onClick={(e) => onClick(e)}>First</Button>
                        <Button active={'Middle' === active} onClick={(e) => onClick(e)}>Middle</Button>
                        <Button active={'Last' === active} onClick={(e) => onClick(e)}>Last</Button>
                    </ButtonGroup>
                </TabBarItem>
                <TabBarItem label="Just empty tab"/>
            </TabBar>
            <h2><span>2. Vertical tabBar:</span></h2>
            <TabBar vertical>
                <TabBarItem label="Simple text">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a g.</p>
                </TabBarItem>
                <TabBarItem label="Image">
                    <Image
                        src="https://wishtackblog.files.wordpress.com/2017/03/angular.png?w=748"
                        width={150}
                        height={150}
                    />
                </TabBarItem>
                <TabBarItem label="Component">
                    <ButtonGroup>
                        <Button active={'1' === active1} onClick={(e) => onClick1(e)}>1</Button>
                        <Button active={'2' === active1} onClick={(e) => onClick1(e)}>2</Button>
                        <Button active={'3' === active1} onClick={(e) => onClick1(e)}>3</Button>
                    </ButtonGroup>
                </TabBarItem>
            </TabBar>
        </div>
    );
}

export default News;
