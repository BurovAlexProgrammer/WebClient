import { Paths } from "common/paths";
import { Icon } from "components/Icon";
import { Col, Image, Row } from "react-bootstrap";

export const PortfolioItem_PortfolioSite = () => {
    return (
        <div>
            <Row>
                <Col className='col-8'>
                    <br/> 
                    <p className='text-left display-3 font-weight-bold'>Portfolio Site</p> 
                    <br/>
                </Col>
                <Col className='col-4 text-right pf-v-center pf-flex-right'>
                    <Icon iconSize='medium' src={Paths.icons.repo} className='text-right'/>
                </Col>
            </Row>
            <Row>
                <Col className='col-8'> 
                    <Image src={Paths.home_jumbotron} className='img-fluid mb-4'/>
                </Col>
                <Col className='col-4'>
                    <p className='display-4 text-left'>Purpose</p> 
                    <p className='blockquote text-left'>
                        {/*
                            Я разрабатываю этот сайт для отображения своих работ и достижений и
                            хочу иметь возможность быстро и информативно показывать людям свои навыки. 
                            Так же я не люблю выполнять тестовые задания и считаю, что сайт-портфолио 
                            позволяет сэкономить очень много времени во время поиска работы. 
                        */}
                        I am developing this site to display my work and achievements and
                        I want to be able to quickly and informatively show people my skills.
                        I also do not like to do test tasks and I think this portfolio site
                        allows me to save a lot of time while looking for a job.
                    </p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p className='display-4 text-left'><br/>Technology Stack</p>
                    <p className='blockquote text-left'>
                    {/* В проекте используется TypeScript, React, SCSS и будет взаимодействовать с другими моими проектами через API. */}
                    The project uses TypeScript, React, SCSS and will interact with my other projects through the API.
                    </p>
                    <p className='display-4 text-left'><br/>Additionally</p>
                    <p className='blockquote text-left'>
                    {/* Я решил опубликовать свои разработки на свой подкроватный сервер - это дешевле и веселее. */}
                    I decided to publish my developments on my bedside server - it's cheaper and more fun.
                    </p>
                </Col>
            </Row>
        </div>
    );
}