json.(comment, :id, :user_id, :card_id, :body, :created_at, :updated_at)
json.author User.find(comment.user_id).username
json.current_user comment.user_id == current_user.id