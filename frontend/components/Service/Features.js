import Fade from 'react-reveal/Fade';
import styled, { css } from 'styled-components'
import respondTo from '../Breakpoints'

// Components
import { colors, shadows } from '../theme'
import { Box3 } from '../Boxes'
import { Col3, Flex } from '../Containers'
import { CustomLink } from '../Links'
import { H3, P3 } from '../Typography'

const Features = ({
    feature1Icon,
    feature1Heading,
    feature1Paragraph,
    feature1ButtonText,
    feature1Link,
    feature2Icon,
    feature2Heading,
    feature2Paragraph,
    feature2ButtonText,
    feature2Link,
    feature3Icon,
    feature3Heading,
    feature3Paragraph,
    feature3ButtonText,
    feature3Link,
}) => {
    return (
        <FeaturesBackground>
            <DesktopCol3 style={{height: '100%'}}>
                <LinkCol3Left
                    align={'center'} justify={'center'}
                    href={feature1Link}
                    target="_blank" rel="noopener noreferrer"
                >
                    <Fade bottom ssrFadeout>
                        <CustomFlex>
                            <Icon style={{backgroundImage: `url(${feature1Icon})`}} />
                            <CustomFlex2 direction={'column'}>
                                <H3 style={{textAlign: 'inherit'}} uppercase color={colors.white}>
                                    {feature1Heading}
                                </H3>
                                <Box3 marginTop={25}>
                                    <P3 style={{textAlign: 'inherit'}} color={colors.white}>
                                        {feature1Paragraph}
                                    </P3>
                                </Box3>
                                <Box3 marginTop={15}>
                                    <P3 uppercase style={{textAlign: 'inherit'}} color={colors.yellow}>
                                        {feature1ButtonText}
                                    </P3>
                                </Box3>
                            </CustomFlex2>
                        </CustomFlex>
                    </Fade>
                </LinkCol3Left>
                <LinkCol3Middle
                    align={'center'} justify={'center'}
                    href={feature2Link}
                    target="_blank" rel="noopener noreferrer"
                >
                    <Fade delay={200} bottom ssrFadeout>
                        <CustomFlex>
                            <Icon style={{backgroundImage: `url(${feature2Icon})`}} />
                            <CustomFlex2 direction={'column'}>
                                <H3 style={{textAlign: 'inherit'}} uppercase color={colors.white}>
                                    {feature2Heading}
                                </H3>
                                <Box3 marginTop={25}>
                                    <P3 style={{textAlign: 'inherit'}} color={colors.white}>I
                                        {feature2Paragraph}
                                    </P3>
                                </Box3>
                                <Box3 marginTop={15}>
                                    <P3 uppercase style={{textAlign: 'inherit'}} color={colors.yellow}>
                                        {feature2ButtonText}
                                    </P3>
                                </Box3>
                            </CustomFlex2>
                        </CustomFlex>
                    </Fade>
                </LinkCol3Middle>
                <LinkCol3Right
                    align={'center'} justify={'center'}
                    href={feature3Link}
                    target="_blank" rel="noopener noreferrer"
                >
                    <Fade delay={400} bottom ssrFadeout>
                        <CustomFlex>
                            <Icon style={{backgroundImage: `url(${feature3Icon})`}} />
                            <CustomFlex2 direction={'column'}>
                                <H3 style={{textAlign: 'inherit'}} uppercase color={colors.white}>
                                    {feature3Heading}
                                </H3>
                                <Box3 marginTop={25}>
                                    <P3 style={{textAlign: 'inherit'}} color={colors.white}>
                                        {feature3Paragraph}
                                    </P3>
                                </Box3>
                                <Box3 marginTop={15}>
                                    <P3 uppercase style={{textAlign: 'inherit'}} color={colors.yellow}>
                                        {feature3ButtonText}
                                    </P3>
                                </Box3>
                            </CustomFlex2>
                        </CustomFlex>
                    </Fade>
                </LinkCol3Right>
            </DesktopCol3>
            <MobileCol3 style={{height: '100%'}}>
                <CustomCol3Left align={'center'} justify={'center'}>
                    <Fade bottom ssrFadeout>
                        <CustomFlex>
                            <Icon style={{backgroundImage: `url(${feature1Icon})`}} />
                            <CustomFlex2 direction={'column'}>
                                <H3 style={{textAlign: 'inherit'}} uppercase color={colors.white}>
                                    {feature1Heading}
                                </H3>
                                <Box3 marginTop={25}>
                                    <P3 style={{textAlign: 'inherit'}} color={colors.white}>
                                        {feature1Paragraph}
                                    </P3>
                                </Box3>
                                <Box3 marginTop={15}>
                                    <CustomLink
                                        href={feature1Link}
                                        target="_blank" rel="noopener noreferrer"
                                    >
                                        <P3 uppercase style={{textAlign: 'inherit'}} color={colors.yellow}>
                                            {feature1ButtonText}
                                        </P3>
                                    </CustomLink>
                                </Box3>
                            </CustomFlex2>
                        </CustomFlex>
                    </Fade>
                </CustomCol3Left>
                <CustomCol3Middle align={'center'} justify={'center'}>
                    <Fade delay={200} bottom ssrFadeout>
                        <CustomFlex>
                            <Icon style={{backgroundImage: `url(${feature2Icon})`}} />
                            <CustomFlex2 direction={'column'}>
                                <H3 style={{textAlign: 'inherit'}} uppercase color={colors.white}>
                                    {feature2Heading}
                                </H3>
                                <Box3 marginTop={25}>
                                    <P3 style={{textAlign: 'inherit'}} color={colors.white}>I
                                        {feature2Paragraph}
                                    </P3>
                                </Box3>
                                <Box3 marginTop={15}>
                                    <CustomLink
                                        href={feature2Link}
                                        target="_blank" rel="noopener noreferrer"
                                    >
                                        <P3 uppercase style={{textAlign: 'inherit'}} color={colors.yellow}>
                                            {feature2ButtonText}
                                        </P3>
                                    </CustomLink>
                                </Box3>
                            </CustomFlex2>
                        </CustomFlex>
                    </Fade>
                </CustomCol3Middle>
                <CustomCol3Right align={'center'} justify={'center'}>
                    <Fade delay={400} bottom ssrFadeout>
                        <CustomFlex>
                            <Icon style={{backgroundImage: `url(${feature3Icon})`}} />
                            <CustomFlex2 direction={'column'}>
                                <H3 style={{textAlign: 'inherit'}} uppercase color={colors.white}>
                                    {feature3Heading}
                                </H3>
                                <Box3 marginTop={25}>
                                    <P3 style={{textAlign: 'inherit'}} color={colors.white}>
                                        {feature3Paragraph}
                                    </P3>
                                </Box3>
                                <Box3 marginTop={15}>
                                    <CustomLink
                                        href={feature3Link}
                                        target="_blank" rel="noopener noreferrer"
                                    >
                                        <P3 uppercase style={{textAlign: 'inherit'}} color={colors.yellow}>
                                            {feature3ButtonText}
                                        </P3>
                                    </CustomLink>
                                </Box3>
                            </CustomFlex2>
                        </CustomFlex>
                    </Fade>
                </CustomCol3Right>
            </MobileCol3>
        </FeaturesBackground>
    )
}

export default Features

const FeaturesBackground = styled.div`
    background: #A7B0BC;
    width: 100%;
    height: 65rem;
    box-shadow: none;

    ${respondTo.xs`
        height: 75rem;
    `}

    ${respondTo.sm`
        height: 75rem;
    `}

    ${respondTo.md`
        height: 80rem;
    `}

    ${respondTo.lg`
        height: 30rem;
        box-shadow: ${shadows.card};
    `}

    ${respondTo.lg`
        height: 40rem;
    `}
`

const DesktopCol3 = styled(Col3)`
    display: none;

    ${respondTo.lg`
        display: grid;
    `}
`

const MobileCol3 = styled(Col3)`
    display: grid;

    ${respondTo.lg`
        display: none;
    `}
`

const CustomFlex = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 30rem;
    height: 18rem;
    background: ${colors.blue};
    box-shadow: ${shadows.card};

    ${respondTo.xs`
        width: 40rem;
        height: 20rem;
    `}

    ${respondTo.sm`
        width: 50rem;
    `}

    ${respondTo.md`
        width: 60rem;
    `}

    ${respondTo.lg`
        flex-direction: column;
        justify-content: center;
        width: 100%;
        height: 100%;
        background: transparent;
        box-shadow: none;
    `}
`

const CustomFlex2 = styled(Flex)`
    width: 18rem;
    text-align: left;

    ${respondTo.xs`
        width: 22rem;
    `}

    ${respondTo.sm`
        width: 25rem;
    `}

    ${respondTo.md`
        width: 30rem;
    `}

    ${respondTo.lg`
        width: auto;
        text-align: center;
    `}
`

const Icon = styled.div`
    height: 6rem;
    width: 6rem;
    background-size: cover;
    background-position: center;
    margin-bottom: 2.5rem;

    ${respondTo.sm`
        height: 8rem;
        width: 8rem;
    `}

    ${respondTo.md`
        height: 10rem;
        width: 10rem;
    `}
`

const LinkCol3Left = styled.a`
    ${props => css`
        grid-column: 1 / 2;
        grid-row: 1 / 2;
        display: flex;
        flex-direction: column;
        text-decoration: none;
        align-items: ${props.align};
        justify-content: ${props.justify};
        transition: all .3s ease;
        pointer-events: none;

        &:hover {
            background: ${colors.yellow};
        }

        ${respondTo.lg`
            pointer-events: auto;
        `}
    `}
`

const LinkCol3Middle = styled.a`
    ${props => css`
        grid-column: 1 / 2;
        grid-row: 2 / 3;
        display: flex;
        flex-direction: column;
        text-decoration: none;
        align-items: ${props.align};
        justify-content: ${props.justify};
        transition: all .3s ease;
        pointer-events: none;

        &:hover {
            background: ${colors.yellow};
        }

        ${respondTo.lg`
            grid-column: 2 / 3;
            grid-row: 1 / 2;
            pointer-events: auto;
        `}
    `}
`

const LinkCol3Right = styled.a`
    ${props => css`
        grid-column: 1 / 2;
        grid-row: 3 / 4;
        display: flex;
        flex-direction: column;
        text-decoration: none;
        align-items: ${props.align};
        justify-content: ${props.justify};
        transition: all .3s ease;
        pointer-events: none;

        &:hover {
            background: ${colors.yellow};
        }

        ${respondTo.lg`
            grid-column: 3 / 4;
            grid-row: 1 / 2;
            pointer-events: auto;
        `}
    `}
`

const CustomCol3Left = styled.div`
    ${props => css`
        grid-column: 1 / 2;
        grid-row: 1 / 2;
        display: flex;
        flex-direction: column;
        text-decoration: none;
        align-items: ${props.align};
        justify-content: ${props.justify};
        transition: all .3s ease;

        ${respondTo.lg`

            &:hover {
                background: ${colors.yellow};
            }
        `}
    `}
`

const CustomCol3Middle = styled.div`
    ${props => css`
        grid-column: 1 / 2;
        grid-row: 2 / 3;
        display: flex;
        flex-direction: column;
        text-decoration: none;
        align-items: ${props.align};
        justify-content: ${props.justify};
        transition: all .3s ease;

        ${respondTo.lg`
            grid-column: 2 / 3;
            grid-row: 1 / 2;

            &:hover {
                background: ${colors.yellow};
            }
        `}
    `}
`

const CustomCol3Right = styled.div`
    ${props => css`
        grid-column: 1 / 2;
        grid-row: 3 / 4;
        display: flex;
        flex-direction: column;
        text-decoration: none;
        align-items: ${props.align};
        justify-content: ${props.justify};
        transition: all .3s ease;

        ${respondTo.lg`
            grid-column: 3 / 4;
            grid-row: 1 / 2;

            &:hover {
                background: ${colors.yellow};
            }
        `}
    `}
`
