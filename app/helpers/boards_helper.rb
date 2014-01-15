module BoardsHelper

  def is_member?(board, user)
    board.members.any?{ |member| member.id == user.id }
  end

  def is_admin?(board, user)
    board.admins.any?{ |admin| admin.id == user.id }
  end

end
