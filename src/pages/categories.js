import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import kebabCase from 'lodash/kebabCase'

import { Layout, Wrapper, Header, SectionTitle } from '../components'
import config from '../../config'

const Content = styled.div`
  grid-column: 2;
  padding: 2rem 4rem;
  background-color: ${props => props.theme.colors.bg};
  z-index: 9000;
  border-bottom: 1px solid #d4d8dd;
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 3rem 3rem;
  }
  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    padding: 2rem 1.5rem;
  }
`

const Title = styled.h3`
  position: relative;
  text-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  margin-bottom: 0.75rem;
`

const BreadCrumbs = styled.div`
  color: ${props => props.theme.colors.grey.ultraLight};
  font-size: ${props => props.theme.fontSize.small};
  span {
    padding: 0 0 0 0.3rem;
  }
`

const Category = ({
  data: {
    allMdx: { group },
  },
}) => (
  <Layout>
    <Wrapper>
      <Helmet title={`Categories | ${config.siteTitle}`} />
      <Header />
      <Content>
        <BreadCrumbs>
          <Link to="/"> Home </Link> / 
          <Link to="/blog"> Blog </Link> /
          <span> Categories </span>
        </BreadCrumbs>
        {group.map(category => (
          <Title key={category.fieldValue}>
            <Link to={`/categories/${kebabCase(category.fieldValue)}`}>{category.fieldValue}</Link> (
            {category.totalCount})
          </Title>
        ))}
      </Content>
    </Wrapper>
  </Layout>
)

export default Category

Category.propTypes = {
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      group: PropTypes.array.isRequired,
    }),
  }).isRequired,
}

export const postQuery = graphql`
  query CategoriesPage {
    allMdx {
      group(field: frontmatter___categories) {
        fieldValue
        totalCount
      }
    }
  }
`
