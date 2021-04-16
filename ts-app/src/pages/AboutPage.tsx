import React from 'react'
import { useHistory } from 'react-router-dom'

export const AboutPage: React.FC = () => {
  const history = useHistory()
  return (
    <>
      <h1>Info page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum esse incidunt repellendus corporis, asperiores enim ratione sequi aut amet id natus impedit, optio dolores exercitationem ab quasi cupiditate. Incidunt, reiciendis.
        Dolor distinctio nisi, quas, repellat sapiente dolorem velit vel quo ullam, corporis quam ut veritatis necessitatibus aut adipisci atque neque explicabo? Nobis possimus ab consectetur tenetur, ipsam numquam explicabo totam?
        Error voluptatum eum explicabo fugit incidunt, tempore sed illo temporibus nihil laboriosam vero sapiente commodi, excepturi expedita voluptate, culpa deserunt perspiciatis quas? Ab cum sit commodi nostrum, unde veritatis doloribus.
        Quis eligendi recusandae aliquam illo deleniti fuga ipsa maiores ea voluptate, qui repellat natus reprehenderit molestias quia, reiciendis rerum possimus! Iure, delectus repellendus veritatis ad eaque sed quae nihil neque.
        Omnis tenetur sed earum libero eum voluptate beatae corrupti repellat mollitia ullam. Obcaecati sit nesciunt architecto quis odit modi delectus accusantium! Incidunt, nisi? Ipsum doloribus quasi repudiandae deserunt autem natus.
      </p>
      <button
        className="btn"
        onClick={() => history.push('/')}
      >
        Back to task list
      </button>
    </>
  )
}
