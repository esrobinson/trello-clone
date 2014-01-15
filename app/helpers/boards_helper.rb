module BoardsHelper

  def is_member?(board, user)
    board.members.any?{ |member| member.id == user.id }
  end

end
