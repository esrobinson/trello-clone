json.(list,
      :id,
      :name,
      :position,
      :archived,
      :board_id,
      :created_at,
      :updated_at)

json.cards list.cards do |card|
   json.partial! card
 end