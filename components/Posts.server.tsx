import { gql } from 'graphql-request';
import { suspend } from 'suspend-react';

import Post from './Post.client';

import { request } from 'libs/request';

let query = gql`
  query PostsQuery {
    posts: allPost {
      _id
      name
    }
  }
`;

export default function Posts() {
  let { data } = suspend(
    () => request<{ posts: { _id: string; name: string }[] }>(query),
    ['PostsQuery', 'v01'],
  );

  return (
    <ul>
      {data.posts.map((post) => {
        return <Post key={post._id} {...post} />;
      })}
    </ul>
  );
}
