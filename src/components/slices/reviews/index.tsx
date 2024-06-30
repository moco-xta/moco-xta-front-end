import React from 'react'

import { ReviewPayloadInterface } from '@/interfaces/reduxApiInterfaces'

import ReviewCard from '@/components/cards/review_card'

import './index.scss'

const reviews: ReviewPayloadInterface[] = [
  {
    id: 0,
    firstName: 'Federico',
    role: 'DEVELOPER',
    review:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    rating: 5,
    date: new Date('2024-5-20'),
  },
  {
    id: 1,
    firstName: 'Federico',
    role: 'DESIGNER',
    review:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    rating: 4,
    date: new Date('2024-5-20'),
  },
  {
    id: 2,
    firstName: 'Antoine',
    role: 'PROJECT_MANAGER',
    review:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    rating: 3,
    date: new Date('2024-5-20'),
  },
  {
    id: 3,
    firstName: 'Charly',
    role: 'DESIGNER',
    review:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    rating: 2,
    date: new Date('2024-5-20'),
  },
  {
    id: 4,
    firstName: 'Toto',
    role: 'DEVELOPER',
    review:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    rating: 1,
    date: new Date('2024-5-20'),
  },
  {
    id: 5,
    firstName: 'Jean-Mich',
    role: 'PROJECT_MANAGER',
    review:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    rating: 0,
    date: new Date('2024-5-20'),
  },
  {
    id: 6,
    firstName: 'Pierre',
    role: 'OTHER',
    review:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    rating: 5,
    date: new Date('2024-5-20'),
  },
]

export default function Reviews() {
  return (
    <div id='reviews_slice'>
      <div>
        <div id='reviews_text_block_and_add_review'>
          <h2 id='review_title'>Reviews</h2>
          <div id='add_review_and_reviews_text'>
            <div id='add_review_small'>
              <p>ADD REVIEW SAMLL</p>
            </div>
            <p id='reviews_text'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
        <div id='add_review_and_review_cards_container'>
          <div id='add_review_large'>
            <p>ADD REVIEW LARGE</p>
          </div>
          <div id='outer'>
            <div id='inner'>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem quibusdam, deleniti
                aperiam enim error ducimus minus dicta quis blanditiis, voluptatum repellat, labore
                architecto alias! Earum consequuntur autem fugit adipisci sed.
              </p>
              <p>
                Animi perferendis atque aspernatur, natus ab id aliquid similique non dolorum eaque
                officiis sint iusto autem sapiente amet. Distinctio doloribus odio labore ducimus.
                Perspiciatis, repellendus qui laborum eveniet laboriosam hic.
              </p>
              <p>
                Officiis labore iusto unde nam facilis beatae sequi fuga odio eaque? Suscipit odit
                alias optio praesentium deleniti, nesciunt incidunt nam mollitia fuga dicta nihil
                non ut fugiat corrupti eaque deserunt!
              </p>
              <p>
                Nulla, quae qui. Quis totam sunt deleniti atque, ea provident illo hic ab, veniam
                ipsam temporibus molestias! Iure, dignissimos, possimus fugit accusamus, cumque
                nulla ratione dolorem eum iusto repellendus tempore?
              </p>
              <p>
                Voluptatum necessitatibus excepturi possimus laborum adipisci, quam ratione id
                cupiditate dolore quis illum fugit explicabo, praesentium iure dolores sunt odit ea
                quia, in velit? Facilis, voluptate. Consequuntur, dignissimos? Sequi, quasi!
              </p>
              <p>
                Earum exercitationem accusamus illum possimus iure nostrum architecto ut tenetur,
                adipisci dicta tempora quam cum. Repellendus, fugiat nisi eum ipsam voluptatem quos
                dolores, architecto incidunt accusantium sunt illo, dolor officia.
              </p>
              <p>
                Molestias assumenda dolorem laborum doloremque corrupti asperiores reiciendis a
                nihil, iste esse distinctio ipsa dolorum corporis vitae sed, magni sequi praesentium
                soluta pariatur dolores ex quam at voluptate! Fuga, et.
              </p>
              <p>
                Magni rem commodi quia delectus, excepturi sequi, officiis minus mollitia vitae
                soluta ipsam ab quaerat voluptatibus! Similique in dolorem perspiciatis tenetur
                esse, provident eum iusto, illum, libero quis laborum excepturi.
              </p>
              <p>
                Fuga laborum exercitationem dignissimos natus aliquid necessitatibus quia tempore
                quibusdam dolorem accusantium. Sapiente eum assumenda quis veritatis ipsum
                molestias, fugiat expedita? Laboriosam ullam iure earum ducimus, reprehenderit
                ratione dolorem consectetur!
              </p>
              <p>
                Assumenda alias fuga tempore velit ab sapiente in sunt minima recusandae
                consequatur, nemo laudantium vitae neque modi eveniet rerum? Ut sapiente ab iure cum
                eaque numquam, quibusdam quo laboriosam autem!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem quibusdam, deleniti
                aperiam enim error ducimus minus dicta quis blanditiis, voluptatum repellat, labore
                architecto alias! Earum consequuntur autem fugit adipisci sed.
              </p>
              <p>
                Animi perferendis atque aspernatur, natus ab id aliquid similique non dolorum eaque
                officiis sint iusto autem sapiente amet. Distinctio doloribus odio labore ducimus.
                Perspiciatis, repellendus qui laborum eveniet laboriosam hic.
              </p>
              <p>
                Officiis labore iusto unde nam facilis beatae sequi fuga odio eaque? Suscipit odit
                alias optio praesentium deleniti, nesciunt incidunt nam mollitia fuga dicta nihil
                non ut fugiat corrupti eaque deserunt!
              </p>
              <p>
                Nulla, quae qui. Quis totam sunt deleniti atque, ea provident illo hic ab, veniam
                ipsam temporibus molestias! Iure, dignissimos, possimus fugit accusamus, cumque
                nulla ratione dolorem eum iusto repellendus tempore?
              </p>
              <p>
                Voluptatum necessitatibus excepturi possimus laborum adipisci, quam ratione id
                cupiditate dolore quis illum fugit explicabo, praesentium iure dolores sunt odit ea
                quia, in velit? Facilis, voluptate. Consequuntur, dignissimos? Sequi, quasi!
              </p>
              <p>
                Earum exercitationem accusamus illum possimus iure nostrum architecto ut tenetur,
                adipisci dicta tempora quam cum. Repellendus, fugiat nisi eum ipsam voluptatem quos
                dolores, architecto incidunt accusantium sunt illo, dolor officia.
              </p>
              <p>
                Molestias assumenda dolorem laborum doloremque corrupti asperiores reiciendis a
                nihil, iste esse distinctio ipsa dolorum corporis vitae sed, magni sequi praesentium
                soluta pariatur dolores ex quam at voluptate! Fuga, et.
              </p>
              <p>
                Magni rem commodi quia delectus, excepturi sequi, officiis minus mollitia vitae
                soluta ipsam ab quaerat voluptatibus! Similique in dolorem perspiciatis tenetur
                esse, provident eum iusto, illum, libero quis laborum excepturi.
              </p>
              <p>
                Fuga laborum exercitationem dignissimos natus aliquid necessitatibus quia tempore
                quibusdam dolorem accusantium. Sapiente eum assumenda quis veritatis ipsum
                molestias, fugiat expedita? Laboriosam ullam iure earum ducimus, reprehenderit
                ratione dolorem consectetur!
              </p>
              <p>
                Assumenda alias fuga tempore velit ab sapiente in sunt minima recusandae
                consequatur, nemo laudantium vitae neque modi eveniet rerum? Ut sapiente ab iure cum
                eaque numquam, quibusdam quo laboriosam autem!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem quibusdam, deleniti
                aperiam enim error ducimus minus dicta quis blanditiis, voluptatum repellat, labore
                architecto alias! Earum consequuntur autem fugit adipisci sed.
              </p>
              <p>
                Animi perferendis atque aspernatur, natus ab id aliquid similique non dolorum eaque
                officiis sint iusto autem sapiente amet. Distinctio doloribus odio labore ducimus.
                Perspiciatis, repellendus qui laborum eveniet laboriosam hic.
              </p>
              <p>
                Officiis labore iusto unde nam facilis beatae sequi fuga odio eaque? Suscipit odit
                alias optio praesentium deleniti, nesciunt incidunt nam mollitia fuga dicta nihil
                non ut fugiat corrupti eaque deserunt!
              </p>
              <p>
                Nulla, quae qui. Quis totam sunt deleniti atque, ea provident illo hic ab, veniam
                ipsam temporibus molestias! Iure, dignissimos, possimus fugit accusamus, cumque
                nulla ratione dolorem eum iusto repellendus tempore?
              </p>
              <p>
                Voluptatum necessitatibus excepturi possimus laborum adipisci, quam ratione id
                cupiditate dolore quis illum fugit explicabo, praesentium iure dolores sunt odit ea
                quia, in velit? Facilis, voluptate. Consequuntur, dignissimos? Sequi, quasi!
              </p>
              <p>
                Earum exercitationem accusamus illum possimus iure nostrum architecto ut tenetur,
                adipisci dicta tempora quam cum. Repellendus, fugiat nisi eum ipsam voluptatem quos
                dolores, architecto incidunt accusantium sunt illo, dolor officia.
              </p>
              <p>
                Molestias assumenda dolorem laborum doloremque corrupti asperiores reiciendis a
                nihil, iste esse distinctio ipsa dolorum corporis vitae sed, magni sequi praesentium
                soluta pariatur dolores ex quam at voluptate! Fuga, et.
              </p>
              <p>
                Magni rem commodi quia delectus, excepturi sequi, officiis minus mollitia vitae
                soluta ipsam ab quaerat voluptatibus! Similique in dolorem perspiciatis tenetur
                esse, provident eum iusto, illum, libero quis laborum excepturi.
              </p>
              <p>
                Fuga laborum exercitationem dignissimos natus aliquid necessitatibus quia tempore
                quibusdam dolorem accusantium. Sapiente eum assumenda quis veritatis ipsum
                molestias, fugiat expedita? Laboriosam ullam iure earum ducimus, reprehenderit
                ratione dolorem consectetur!
              </p>
              <p>
                Assumenda alias fuga tempore velit ab sapiente in sunt minima recusandae
                consequatur, nemo laudantium vitae neque modi eveniet rerum? Ut sapiente ab iure cum
                eaque numquam, quibusdam quo laboriosam autem!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem quibusdam, deleniti
                aperiam enim error ducimus minus dicta quis blanditiis, voluptatum repellat, labore
                architecto alias! Earum consequuntur autem fugit adipisci sed.
              </p>
              <p>
                Animi perferendis atque aspernatur, natus ab id aliquid similique non dolorum eaque
                officiis sint iusto autem sapiente amet. Distinctio doloribus odio labore ducimus.
                Perspiciatis, repellendus qui laborum eveniet laboriosam hic.
              </p>
              <p>
                Officiis labore iusto unde nam facilis beatae sequi fuga odio eaque? Suscipit odit
                alias optio praesentium deleniti, nesciunt incidunt nam mollitia fuga dicta nihil
                non ut fugiat corrupti eaque deserunt!
              </p>
              <p>
                Nulla, quae qui. Quis totam sunt deleniti atque, ea provident illo hic ab, veniam
                ipsam temporibus molestias! Iure, dignissimos, possimus fugit accusamus, cumque
                nulla ratione dolorem eum iusto repellendus tempore?
              </p>
              <p>
                Voluptatum necessitatibus excepturi possimus laborum adipisci, quam ratione id
                cupiditate dolore quis illum fugit explicabo, praesentium iure dolores sunt odit ea
                quia, in velit? Facilis, voluptate. Consequuntur, dignissimos? Sequi, quasi!
              </p>
              <p>
                Earum exercitationem accusamus illum possimus iure nostrum architecto ut tenetur,
                adipisci dicta tempora quam cum. Repellendus, fugiat nisi eum ipsam voluptatem quos
                dolores, architecto incidunt accusantium sunt illo, dolor officia.
              </p>
              <p>
                Molestias assumenda dolorem laborum doloremque corrupti asperiores reiciendis a
                nihil, iste esse distinctio ipsa dolorum corporis vitae sed, magni sequi praesentium
                soluta pariatur dolores ex quam at voluptate! Fuga, et.
              </p>
              <p>
                Magni rem commodi quia delectus, excepturi sequi, officiis minus mollitia vitae
                soluta ipsam ab quaerat voluptatibus! Similique in dolorem perspiciatis tenetur
                esse, provident eum iusto, illum, libero quis laborum excepturi.
              </p>
              <p>
                Fuga laborum exercitationem dignissimos natus aliquid necessitatibus quia tempore
                quibusdam dolorem accusantium. Sapiente eum assumenda quis veritatis ipsum
                molestias, fugiat expedita? Laboriosam ullam iure earum ducimus, reprehenderit
                ratione dolorem consectetur!
              </p>
              <p>
                Assumenda alias fuga tempore velit ab sapiente in sunt minima recusandae
                consequatur, nemo laudantium vitae neque modi eveniet rerum? Ut sapiente ab iure cum
                eaque numquam, quibusdam quo laboriosam autem!
              </p>
            </div>
          </div>
          {/* <div id='review_cards_container'>
            <div id='review_cards_wrapper'>
              {reviews.map((review, index) => {
                return (
                  <ReviewCard key={`review_card_${index}`} review={review} />
                )
              })}
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}
