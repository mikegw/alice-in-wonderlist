class Share < ActiveRecord::Base

  validates :list_id, uniqueness: {scope: :user_id}

  belongs_to :collaborator,
    class_name: "User",
    foreign_key: :user_id,
    inverse_of: :collaborations

  belongs_to :list,
    inverse_of: :shares

end
